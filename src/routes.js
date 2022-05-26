import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send('REST Fullstack Challenge 20201209 Running')
});

export default routes;
