export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Here you can integrate Nodemailer, SendGrid, etc.
    console.log("New Contact Message:", { name, email, message });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  }
  
  res.status(405).json({ success: false, message: "Method Not Allowed" });
}
