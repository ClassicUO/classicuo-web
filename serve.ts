import Server, { Middleware } from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

const redirectMiddleware: Middleware = (req, next, _conn) => {
  const { pathname, origin } = new URL(req.url);
  if(/^\/docs\/?$/i.test(pathname)) {
    return Promise.resolve(Response.redirect(`${origin}/docs/intro`));
  }

  return next(req);
}

server.use(redirectMiddleware);
server.start();

console.log("Listening on http://localhost:8000");
