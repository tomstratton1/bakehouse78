# bakehouse78
bakehouse78


## Creation

```
docker run -it --rm -v "$PWD/app":/app -w /app node:22-slim npx create-next-app@latest .
```

## Run

```
docker compose up -d
```



### Notes

aws ses send-email \
  --from "norreply@bakehouse78.co.uk" \
  --destination "ToAddresses=tstratton3912@gmail.com" \
  --message "Subject={Data=Test Email},Body={Text={Data=Hello from AWS SES via CLI!}}"
