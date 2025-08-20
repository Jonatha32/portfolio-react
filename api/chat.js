// Rate limiting simple
const requests = new Map();

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting por IP
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 60000; // 1 minuto
  const maxRequests = 5; // 5 mensajes por minuto

  if (!requests.has(clientIP)) {
    requests.set(clientIP, []);
  }

  const userRequests = requests.get(clientIP);
  const recentRequests = userRequests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({ 
      error: 'Demasiadas consultas',
      response: 'Por favor espera un momento antes de hacer otra pregunta.'
    });
  }

  recentRequests.push(now);
  requests.set(clientIP, recentRequests);

  try {
    const { message, personalInfo, systemPrompt } = req.body;

    // URL de tu servidor Ollama (ngrok o servidor remoto)
    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
    
    // Si no hay OLLAMA_URL configurada, devolver mensaje informativo
    if (!process.env.OLLAMA_URL && process.env.NODE_ENV === 'production') {
      return res.status(503).json({
        response: 'F3nix está temporalmente desconectado. Jonathan necesita encender su servidor local para que funcione.'
      });
    }

    const response = await fetch(`${ollamaUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2:3b',
        prompt: `${systemPrompt}\n\nINFORMACIÓN DE REFERENCIA SOBRE JONATHAN:\n${JSON.stringify(personalInfo, null, 2)}\n\nPregunta del usuario: ${message}\n\nRespuesta (máximo 60 palabras):`,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          num_predict: 100
        }
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Error conectando con Ollama');
    }

    res.status(200).json({
      response: data.response
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      response: 'Lo siento, no puedo conectar con Ollama en este momento.'
    });
  }
}