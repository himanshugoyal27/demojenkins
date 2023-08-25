const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service provider
  auth: {
    user: "jsumalatha85@gmail.com", // Replace with your email address
    pass: "yeswant2903", // Replace with your email password
  },
});

// Define a route for sending emails
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: "jsumalatha85@example.com",
      to,
      subject,
      text,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
