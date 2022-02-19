import { Application, send } from "oak";

import { configureRoutes } from './routes/index.ts';

import { parse } from "https://deno.land/std/flags/mod.ts";
const { args } = Deno;
const { port } = parse(args);

const app = new Application();

configureRoutes(app);
// app.use((ctx) => console.log(ctx.request.url.pathname))

app.use(async (context) => {
  if (!context.response.body)
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/client/public`,
      index: 'index.html'
    })
})

app.addEventListener('listen', () => {
  console.log(`Listening on port ${port}`);
})

app.listen({
  port
})