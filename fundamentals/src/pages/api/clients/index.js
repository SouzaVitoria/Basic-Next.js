export default function client(req, res) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else {
    res.status(200).send();
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id: 2,
    name: req.query.name,
    age: +req.query.age,
  });
}
