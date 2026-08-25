/* =========================================================
   TELEGRAM BOT - GỬI THÔNG BÁO
========================================================= */


async function sendToTelegram(data, files) {
    try {
        // Xây dựng nội dung tin nhắn
        let message = `🔔 *YÊU CẦU BẢO HÀNH MỚI*\n\n`;
        message += `👤 *Khách hàng:* ${data.username}\n\n`;
        message += `📱 *Thông tin liên hệ:*\n`;
        
        if (data.telegram) {
            const tgUsername = data.telegram.startsWith('@') ? data.telegram : `@${data.telegram}`;
            message += `Telegram: ${tgUsername}\n`;
        }
        
        message += `\n🔑 *UDID:*\n\`${data.udid}\`\n\n`;
        message += `📱 *Thiết bị:* ${data.device}\n\n`;
        message += `⚠️ *Tình trạng lỗi:*\n${data.issue}\n\n`;
        
        if (data.orderId) {
            message += `📦 *Mã đơn hàng:* ${data.orderId}\n\n`;
        }
        
        if (data.description) {
            message += `📝 *Mô tả chi tiết:*\n${data.description}\n\n`;
        }
        
        message += `🕐 *Thời gian:* ${new Date().toLocaleString('vi-VN')}`;
        
        // Gửi tin nhắn văn bản
        const textResponse = await fetch(`${TELEGRAM_CONFIG.API_BASE}/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.ADMIN_ID,
                text: message,
                parse_mode: "Markdown"
            })
        });
        
        if (!textResponse.ok) {
            throw new Error("Không thể gửi tin nhắn văn bản");
        }
        
        // Gửi ảnh đính kèm nếu có
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
                    const formData = new FormData();
                    formData.append("chat_id", TELEGRAM_CONFIG.ADMIN_ID);
                    formData.append("caption", i === 0 ? `📎 Ảnh kèm theo yêu cầu bảo hành từ ${data.username}` : "");
                    
                    if (file.type.startsWith("image/")) {
                        formData.append("photo", file);
                    } else {
                        formData.append("video", file);
                    }
                    
                    await fetch(`${TELEGRAM_CONFIG.API_BASE}/bot${TELEGRAM_CONFIG.BOT_TOKEN}/send${file.type.startsWith("image/") ? "Photo" : "Video"}`, {
                        method: "POST",
                        body: formData
                    });
                }
            }
        }
        
        return { success: true };
        
    } catch (error) {
        console.error("Lỗi gửi Telegram:", error);
        return { success: false, error: error.message };
    }
}
