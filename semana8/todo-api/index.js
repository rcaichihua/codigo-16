import express from "express";
const app = express();

const todoListArray = [];

app.get("/", (request, response) => {
  /*
   *
   *Total:
   *Entries: []
   * */

  response.json({
    total: todoListArray.length,
    tasks: todoListArray,
  });
});

app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
