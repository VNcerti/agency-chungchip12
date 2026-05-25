(function () {
  'use strict';

  var BOT_TOKEN = '7963790947:AAFtzqLZEduU5RNFLbGah7OxoTqTLSNZO6o';
  var ADMIN_ID = '6061547040';
  var form = document.getElementById('agencyForm');
  var submitBtn = document.getElementById('submitBtn');
  var statusBox = document.getElementById('formStatus');

  function showStatus(type, message) {
    if (!statusBox) return;
    statusBox.className = 'form-status show ' + type;
    statusBox.textContent = message;
  }

  function clean(value) {
    return String(value || '').trim();
  }

  function buildMessage(data) {
    var now = new Date();
    return [
      '🌟 YÊU CẦU ĐĂNG KÝ CTV MỚI',
      '',
      '👤 Họ và tên: ' + data.fullName,
      '📞 Liên hệ: ' + data.contactInfo,
      '📝 Lý do tham gia:',
      data.reason,
      '',
      '👥 Cộng đồng: ' + (data.community || 'Không có / chưa cung cấp'),
      '⏰ Thời gian gửi: ' + now.toLocaleString('vi-VN'),
      '',
      'Nguồn: register-agency.html'
    ].join('\n');
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = {
        fullName: clean(document.getElementById('fullName').value),
        contactInfo: clean(document.getElementById('contactInfo').value),
        reason: clean(document.getElementById('reason').value),
        community: clean(document.getElementById('community').value)
      };

      if (!data.fullName || !data.contactInfo || !data.reason) {
        showStatus('error', 'Vui lòng điền đầy đủ họ tên, thông tin liên hệ và lý do đăng ký.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi yêu cầu...';
      showStatus('success', 'Đang gửi thông tin đến admin, vui lòng chờ trong giây lát...');

      fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: ADMIN_ID,
          text: buildMessage(data),
          disable_web_page_preview: true
        })
      })
      .then(function (response) {
        if (!response.ok) throw new Error('Telegram API error');
        return response.json();
      })
      .then(function () {
        showStatus('success', 'Gửi yêu cầu thành công! Admin đã nhận thông tin và sẽ liên hệ lại sớm.');
        form.reset();
      })
      .catch(function () {
        showStatus('error', 'Chưa gửi được yêu cầu. Vui lòng kiểm tra lại token bot/admin ID hoặc thử lại sau.');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Gửi yêu cầu đăng ký';
      });
    });
  }
})();
