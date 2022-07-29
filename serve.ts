import Server, { Middleware } from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

const redirectMiddleware: Middleware = (req, next, _conn) => {
  const url = new URL(req.url);

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    return Promise.resolve(Response.redirect(url.toString(), 301)); 
  }

  if(/^\/docs\/?$/i.test(url.pathname)) {
    url.pathname = '/docs/intro';
    return Promise.resolve(Response.redirect(url.toString()));
  }

  return next(req);
}

server.use(redirectMiddleware);
server.start();

console.log("Listening on http://localhost:8000");
