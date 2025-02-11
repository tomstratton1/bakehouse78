import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import rateLimit from "express-rate-limit";

// Check if running locally
const isLocal = process.env.NODE_ENV !== "production";

// Configure AWS SES Client
const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  ...(isLocal && {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  }),
});

// Helper function to get the real IP address
const getIP = (req: NextRequest) => {
  return req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1"; // Default to localhost
};

// Create rate limiter
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Max 5 emails per hour per IP
  message: { error: "Too many emails sent. Please try again later." },
  keyGenerator: (req: Request) => getIP(req as NextRequest), // Use extracted IP
  standardHeaders: true,
  legacyHeaders: false,
});


// Apply rate limiting
export async function POST(req: NextRequest) {
  return new Promise((resolve) => {
    limiter(req as any, {} as any, () => resolve(handleSendEmail(req)));
  });
}

export async function handleSendEmail(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    // Validate input (Only allow text)
    if (!email || !message || typeof message !== "string" || !message.match(/^[a-zA-Z0-9 .,!?()'"[\]-]+$/m)) {
      return NextResponse.json({ error: "Invalid message format." }, { status:400 });
    }

    // Construct email parameters
    const sourceEmail = process.env.SES_FROM_EMAIL || "";
    const destinationEmail = process.env.SES_TO_EMAIL || "";

    const params = {
      Source: `"Bakehouse 78" <${sourceEmail}>`, // Adds sender name
      Destination: { ToAddresses: [destinationEmail].filter(Boolean) },
      Message: {
        Subject: {
          Data: "New Contact Message from Bakehouse 78",
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `From: ${email}\n\nMessage:\n${message}`,
            Charset: "UTF-8",
          },
          Html: {
            Data: `
              <html>
                <head>
                  <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .email-container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                    .email-header { font-size: 18px; font-weight: bold; color: #444; }
                    .email-content { margin-top: 10px; font-size: 16px; }
                    .email-footer { margin-top: 20px; font-size: 14px; color: #888; }
                  </style>
                </head>
                <body>
                  <div class="email-container">
                    <p class="email-header">New Contact Message from Bakehouse 78</p>
                    <p class="email-content"><strong>From:</strong> ${email}</p>
                    <p class="email-content">${message.replace(/\n/g, "<br>")}</p>
                    <p class="email-footer">This email was sent from Bakehouse 78.</p>
                  </div>
                </body>
              </html>
            `,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email], // Ensures replies go to the sender
    };

    // Send email using SES
    await sesClient.send(new SendEmailCommand(params));

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("SES Error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
