export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return res.status(500).json({ success: false, message: 'Server configuration error: ADMIN_PASSWORD not set.' });
  }

  if (password === adminPassword) {
    return.status(200).json({ success: true, message: 'Authentication successful.' });
  } else {
    return res.status(401).json({ success: false, message: 'Incorrect passcode.' });
  }
}
