const express = require('express');
const emailTracker = require('email-tracker-pro');

const app = express();

app.get('/track/:id', (req, res) => {
  emailTracker.handlePixelRequest(req, res, (trackingId, clientInfo) => {
    console.log('---');
    console.log(`✅ 邮件被打开了！`);
    console.log(`ID: ${trackingId}`);
    console.log(`时间: ${new Date().toLocaleString()}`);
    if (clientInfo) {
      console.log(`位置: ${clientInfo.city || '未知'}, ${clientInfo.country || '未知'}`);
      console.log(`设备: ${clientInfo.os || '未知'} / ${clientInfo.browser || '未知'}`);
    }
  });
});

app.listen(process.env.PORT || 3000, () => console.log('追踪服务器已启动'));
