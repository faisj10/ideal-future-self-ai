import type { NextApiRequest, NextApiResponse } from 'next/api';

interface ChatRequest {
  message: string;
  userId?: string;
}

interface ChatResponse {
  response: string;
  timestamp: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, userId } = req.body as ChatRequest;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // TODO: Integrate with OpenAI API
    // This will call the OpenAI assistant for the user
    const response = 'I appreciate you sharing that with me. Let’s work together on your goals.';

    res.status(200).json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}