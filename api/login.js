// Example Serverless Function for Vercel/Netlify
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { password } = req.body;
    
    // Compare against the server's hidden environment variable
    if (password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ success: true, token: 'secure_auth_token_xyz' });
    } else {
        return res.status(401).json({ success: false, error: 'Incorrect passcode' });
    }
}
