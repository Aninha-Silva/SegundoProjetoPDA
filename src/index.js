import express from 'express';
import { createTable } from './controller/usuario.js';
import { createTableProduto } from './controller/produto.js';
import { createTableCarrinho } from './controller/carrinho.js';


const app = express();
app.use(express.json());

createTable();
createTableProduto();
createTableCarrinho();



import router from './routes.js'
app.use(router);

app.listen(3000, ()=>console.log("API rodando."))