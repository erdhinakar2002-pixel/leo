const nodemailer = require("nodemailer");
require("dotenv").config();

// Check if email credentials are available
const hasEmailConfig = process.env.EMAIL && process.env.EMAIL_PASS;

// Create transporter with proper Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.log("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
    console.log("📧 Using email:", process.env.EMAIL);
  }
});

const sendMail = (order) => {
  // If no email config, just log the order and return
  if (!hasEmailConfig) {
    console.log("📧 Email not configured. Order details:", order);
    console.log("📧 To enable emails, create a .env file with:");
    console.log("📧 EMAIL=your-email@gmail.com");
    console.log("📧 EMAIL_PASS=your-gmail-app-password");
    return Promise.resolve();
  }

  // Handle items format - could be string or array
  let itemsHtml = "";
  if (Array.isArray(order.items)) {
    // If items is an array of objects
    itemsHtml = order.items.map(item => `
      <tr>
        <td>${item.name || 'Unknown'}</td>
        <td align="center">${item.quantity || 1}</td>
        <td align="right">₹${item.price || 0}</td>
        <td align="right">₹${(item.price || 0) * (item.quantity || 1)}</td>
      </tr>
    `).join("");
  } else if (typeof order.items === 'string') {
    // If items is already a formatted string
    itemsHtml = `<tr><td colspan="4">${order.items}</td></tr>`;
  } else {
    // Fallback
    itemsHtml = `<tr><td colspan="4">No items details</td></tr>`;
  }

  const mailOptions = {
    from: `"Crackers Store" <${process.env.EMAIL}>`,
    to: process.env.EMAIL, // Send to yourself
    cc: order.email, // Also send to customer
    subject: "🛒 New Order Received - Crackers Store",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">🎆 Crackers Store</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">New Order Received</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #ddd; border-top: none;">
          <h2 style="color:#2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">👤 Customer Details</h2>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Mobile:</strong> ${order.mobile}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>District:</strong> ${order.district}</p>
          </div>

          <h2 style="color:#2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">🛍️ Ordered Items</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #ddd;">
            <thead style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
              <tr>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Product</th>
                <th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Quantity</th>
                <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Price</th>
                <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="background: #27ae60; color: white; padding: 20px; border-radius: 5px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">💰 Total: ₹${order.total}</h2>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-left: 4px solid #3498db; border-radius: 5px;">
            <p style="margin: 0; color: #2c3e50;"><strong>Note:</strong> This order has been received and is being processed. You will receive further updates soon.</p>
          </div>
        </div>
        
        <div style="background: #34495e; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px;">
          <p style="margin: 0;">© 2024 Crackers Store. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  return new Promise((resolve, reject) => {
    console.log("📧 Attempting to send email...");
    console.log("📧 From:", mailOptions.from);
    console.log("📧 To:", mailOptions.to);
    console.log("📧 CC:", mailOptions.cc);
    
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("❌ Error sending email:", err.message);
        console.log("❌ Error code:", err.code);
        console.log("❌ Full error:", err);
        reject(err);
      } else {
        console.log("✅ Email sent successfully!");
        console.log("✅ Message ID:", info.messageId);
        console.log("✅ Response:", info.response);
        resolve(info);
      }
    });
  });
};

module.exports = sendMail;
