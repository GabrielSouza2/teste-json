import { create, router as _router, defaults } from 'Json-server';
const server = create();
const router = _router('db.json');
const middlewares = defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    //esnlint-disable-next-line no console
    console.log('JSON Server está funcionando.')
})