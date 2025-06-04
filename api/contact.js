export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          details: 'Name, email, and message are all required.'
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Invalid email format',
          details: 'Please provide a valid email address.'
        });
      }

      // Log the contact form submission
      console.log('Contact Form Submission:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Timestamp:', new Date().toISOString());
      console.log('---');

      // TODO: Configure email sending (Nodemailer, SendGrid, etc.)
      // For now, we're just logging the data
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));

      res.status(200).json({ 
        message: 'Form submitted successfully',
        data: {
          name,
          email,
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: 'Something went wrong processing your request. Please try again.'
      });
    }
  } else {
    res.status(405).json({ 
      error: 'Method not allowed',
      details: 'Only POST requests are allowed for this endpoint.'
    });
  }
} 