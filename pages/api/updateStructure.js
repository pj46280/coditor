export default async function handler(req, res) {
  const apiUrl = process.env.BACKEND_API_URL;
  try {
    const response = await fetch(`${apiUrl}/updateStructure`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to update data:', error);
    res.status(500).json({ error: 'Failed to update data' });
  }
}
