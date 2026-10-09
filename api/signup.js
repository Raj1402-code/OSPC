export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { full_name, email, favorite_vlog_type, message, consent } = req.body || {};

    if (!full_name || !email || !consent) {
      return res.status(400).json({ error: 'Missing required passenger fields' });
    }

    console.log('[Serverless Backend] New passenger signup recorded:', {
      full_name,
      email,
      favorite_vlog_type,
      message,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      message: `Welcome aboard, ${full_name}! Server confirmed your passenger seat.`,
    });
  } catch (error) {
    console.error('Serverless signup error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
