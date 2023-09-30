const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  //custom endpoint for done todos
  if (req.method === "PUT" && req.path.includes("done")) {
    console.log(req.method)
    console.log(req.path.includes("done"))
    req.body.done = true;
    req.body.finishedAt = Date.now();
  }
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});
// Use default router
server.use(jsonServer.rewriter({
  "/items/done/:id": "/items/:id"
}))
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
