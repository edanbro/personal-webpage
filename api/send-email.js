const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const EMAIL_FROM = process.env.EMAIL_FROM; // e.g. "no-reply@yourdomain.com"
    const EMAIL_TO = process.env.EMAIL_TO; // your email address

    if (!SENDGRID_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
      res.status(500).json({ error: 'Email service not configured' });
      return;
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject: `Website contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    };

    await sgMail.send(msg);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Send failed' });
  }
};
