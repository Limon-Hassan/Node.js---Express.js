const app = require('./main');

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server will be running at http://localhost:${PORT}`)
})