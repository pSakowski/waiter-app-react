import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db/app.json'));
const middlewares = jsonServer.defaults({
  static: 'build',
  noCors: true
});
const port = process.env.PORT || 5000;

server.use(middlewares);

// Rewrite routes to use "/api" prefix
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

server.use('/api', router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});