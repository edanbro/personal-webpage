Serverless Email Endpoint (SendGrid)

This project includes a serverless function at `api/send-email.js` that sends contact form messages via SendGrid.

Environment variables required (set these in your hosting provider or local env):

- SENDGRID_API_KEY - your SendGrid API key
- EMAIL_FROM - the "from" email address (must be verified in SendGrid, e.g. no-reply@yourdomain.com)
- EMAIL_TO - the recipient address (your email)

Deploying
- Vercel: place `api/send-email.js` under the project root (it will be deployed as a Serverless Function). Add the env vars in the Vercel project settings.
- Netlify: place the file under `netlify/functions/send-email.js` and configure Netlify Functions; or adapt accordingly. Set env vars in Netlify site settings.

Local testing
- You can test locally by running `ng serve` for the frontend and a small Node server for the function, or use `vercel dev`/`netlify dev`.

Client
- The contact form POSTs JSON to `/api/send-email`. The function expects `{name,email,message}` and will reply with `200 OK` on success.

Security note
- Keep `SENDGRID_API_KEY` secret. Do not commit to source control. Use provider environment variables.
