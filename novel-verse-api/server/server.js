const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const PORT = 3001;

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
