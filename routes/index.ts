import { Application, Router } from 'oak';

import { factionRouter } from './factions.ts';

const routes: Router[] = [
  factionRouter
];

export const configureRoutes = (app: Application) => 
  routes.forEach(r => {
    app.use(r.routes());
    app.use(r.allowedMethods());
  })
