export default function handler(req, res) {
  res.status(200).json({
    id: Math.random().toFixed(2),
    age: req.query.codigo,
    name: "Souza",
  });
}
