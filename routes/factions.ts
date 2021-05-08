import { Router } from 'oak';

export const factionRouter = new Router({
  prefix: '/api/factions'
})
  .get('/', (ctx) => {
    ctx.response.body = 'test successful';
    // ctx.res
  });