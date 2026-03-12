import { NextRequest, NextResponse } from 'next/server';
import { RATE_LIMIT } from '@/lib/constants';
import { validateEmail, sanitizeInput } from '@/lib/validation';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return true;
  }

  if (limit.count >= RATE_LIMIT.maxRequests) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      company: company ? sanitizeInput(company) : '',
      email: sanitizeInput(email),
      subject: subject ? sanitizeInput(subject) : 'General Inquiry',
      message: sanitizeInput(message),
    };

    console.log('Contact form submission:', sanitizedData);

    return NextResponse.json(
      { success: true, message: 'Your inquiry has been submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
