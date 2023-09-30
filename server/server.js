const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

//custom endpoint
server.post("/items/:id/done", (req, res) => {
  const item = db.items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    res.status(404).send("Not found");
  } else {
    item.done = true;
    item.finishedAt = Date.now();
  }
});

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    console.log(req.body);
    req.body.createdAt = Date.now();
  }
  next();
});
// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
