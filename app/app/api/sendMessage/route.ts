import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

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

// export async function POST(req: NextRequest) {
//   try {
//     const { email, message } = await req.json();

//     // Validate input (Only allow text)
//     if (!email || !message || typeof message !== "string" || !message.match(/^[a-zA-Z0-9 .,!?()'"-]+$/)) {
//       return NextResponse.json({ error: "Invalid message format." }, { status: 400 });
//     }

//     // Construct email parameters
//     const params = {
//       Source: process.env.SES_FROM_EMAIL, // Verified sender email
//       Destination: { ToAddresses: [process.env.SES_TO_EMAIL] }, // Admin email
//       Message: {
//         Subject: { Data: "New Contact Message from Bakehouse 78" },
//         Body: { Text: { Data: `From: ${email}\n\nMessage: ${message}` } },
//       },
//     };

//     // Send email using SES
//     await sesClient.send(new SendEmailCommand(params));

//     return NextResponse.json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("SES Error:", error);
//     return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
//   }
// }
