interface Env {
  SEND_EMAIL?: any;
  RESEND_API_KEY?: string;
  CONTACT_WEBHOOK_URL?: string;
  CONTACT_EMAIL?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  _honey?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  // 1. Enforce JSON content type
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ success: false, error: 'Invalid content type. Expected application/json.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Malformed JSON payload.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 2. Anti-spam honeypot detection
  if (body._honey && body._honey.trim().length > 0) {
    // Silently accept bot submissions to avoid tipping off spammers
    return new Response(JSON.stringify({ success: true, message: 'Message received.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 3. Server-side validation
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : 'Inquiry from Real BMI Contact Form';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (name.length < 2 || name.length > 100) {
    return new Response(JSON.stringify({ success: false, error: 'Name must be between 2 and 100 characters.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.length > 254 || !emailRegex.test(email)) {
    return new Response(JSON.stringify({ success: false, error: 'Please provide a valid email address.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (message.length < 10 || message.length > 3000) {
    return new Response(JSON.stringify({ success: false, error: 'Message must be between 10 and 3,000 characters.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const recipientEmail = env.CONTACT_EMAIL || 'support@realbmicalculator.com';

  // 4. Message delivery handling
  // Option A: Resend API Key configured
  if (env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Real BMI Contact <notifications@realbmicalculator.com>',
          to: [recipientEmail],
          reply_to: email,
          subject: `[Contact Form] ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
        })
      });
      if (res.ok) {
        return new Response(JSON.stringify({ success: true, message: 'Your message has been sent successfully. We will reply within 24–48 hours.' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (e: any) {
      console.error('Failed to send via Resend:', e);
    }
  }

  // Option B: Webhook endpoint configured (e.g., Slack, Discord, Zapier)
  if (env.CONTACT_WEBHOOK_URL) {
    try {
      const res = await fetch(env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New contact form submission:\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`
        })
      });
      if (res.ok) {
        return new Response(JSON.stringify({ success: true, message: 'Your message has been received. Our team will review it shortly.' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (e: any) {
      console.error('Failed to send via Webhook:', e);
    }
  }

  // Option C: No third-party delivery service currently configured in environment
  // Transparently inform client and prompt direct mailto client execution
  return new Response(JSON.stringify({
    success: false,
    requiresConfig: true,
    supportEmail: recipientEmail,
    error: 'Automated email relay is awaiting Cloudflare email dispatch configuration. Please send your message directly via email to ' + recipientEmail + '.'
  }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' }
  });
}
