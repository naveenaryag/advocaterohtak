import dotenv from "dotenv";

dotenv.config();

export interface TelegramLeadData {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}

export async function sendTelegramNotification(data: TelegramLeadData): Promise<void> {
  // Read env vars at runtime to ensure dotenv has loaded them
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[Telegram] Bot token or chat ID not configured. Skipping notification.");
    return;
  }

  const { name, phone, email, subject, message } = data;

  // Format phone - add +91 if no country code, remove spaces for auto-detection
  let cleanPhone = phone.replace(/[^\d+]/g, '');
  if (!cleanPhone.startsWith('+')) {
    // Remove leading 0 if present and add +91 for Indian numbers
    cleanPhone = '+91' + cleanPhone.replace(/^0+/, '');
  }
  const telegramMessage = `
🔔 <b>NEW LEAD</b>

👤 <b>Name:</b> ${escapeHtml(name)}
📱 <b>Phone:</b> ${cleanPhone}
${email && !email.includes('@callback.lead') ? `📧 <b>Email:</b> ${escapeHtml(email)}` : ''}
📋 <b>Subject:</b> ${escapeHtml(subject)}

💬 <b>Message:</b>
${escapeHtml(message)}
`.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("[Telegram Error] Failed to send notification:", errorData);
    } else {
      console.log("[Telegram] Lead notification sent successfully.");
    }
  } catch (error) {
    console.error("[Telegram Error]:", error);
    // Don't throw - Telegram failure shouldn't break form submission
  }
}

// Escape HTML special characters for Telegram
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
