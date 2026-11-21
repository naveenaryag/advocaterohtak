import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error(
    "[Email Error] Gmail credentials missing. Set GMAIL_USER + GMAIL_APP_PASSWORD in .env or PM2 env."
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const { name, email, phone, subject, message } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }
          .header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #2c3e50;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #555;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 3px solid #2c3e50;
            border-radius: 4px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #eee;
            text-align: center;
            color: #888;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>AdvocateRohtak.com</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <div class="value">${phone}</div>
            </div>
            <div class="field">
              <span class="label">Subject:</span>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on AdvocateRohtak.com</p>
            <p>Please respond directly to the client at: ${email}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission from AdvocateRohtak.com

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

---
Please respond directly to the client at: ${email}
`;

  const mailOptions = {
    from: `"AdvocateRohtak Contact Form" <${GMAIL_USER}>`,
    to: ["naveenarya@gmail.com", "naveen@advocaterohtak.com"],
    replyTo: email,
    subject: `New Contact Inquiry: ${subject}`,
    text: textContent,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("[Email Sent] Contact inquiry delivered successfully.");
  } catch (error) {
    console.error("[Email Sending Error]:", error);
    throw error; // Let API return success=true to user but log server error
  }
}
