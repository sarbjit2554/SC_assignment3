const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  // Insecure: directly using user input in SQL
  const sql = "SELECT * FROM users WHERE id = " + req.params.id;
  res.send("Query: " + sql);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
