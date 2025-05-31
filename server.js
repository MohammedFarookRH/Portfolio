import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your SMTP transporter (use real credentials in production)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rhmohammedfarook@gmail.com",
      pass: "cgjipmaqfvzkbtbw", // Use an App Password, not your real password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "rhmohammedfarook@gmail.com",
      subject: `Contact Form Message from ${name}`,
      text: message,
      replyTo: email,
    });
    res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
    console.log(error); // <-- Add this line to log the real error in your terminal
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));