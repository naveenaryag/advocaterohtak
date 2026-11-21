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

  // Format message - phone number plain so Telegram auto-detects it as clickable
  const cleanPhone = phone.replace(/[^\d+]/g, '').replace(/\+/g, '\\+');
  const telegramMessage = `
🔔 *NEW LEAD*

👤 *Name:* ${escapeMarkdownV2(name)}
📱 *Phone:* ${cleanPhone}
${email && !email.includes('@callback.lead') ? `📧 *Email:* ${escapeMarkdownV2(email)}` : ''}
📋 *Subject:* ${escapeMarkdownV2(subject)}

💬 *Message:*
${escapeMarkdownV2(message)}
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
          parse_mode: "MarkdownV2",
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

// Escape special MarkdownV2 characters for Telegram
function escapeMarkdownV2(text: string): string {
  return text.replace(/[_*\[\]()~`>#+=|{}.!\\-]/g, '\\$&');
}
