import { Router } from "express";
import { createTable, insertUsuario, updateUsuario, selectUsuarios, selectUsuario, deleteUsuario } from './controller/usuario.js';
import { createTableProduto, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './controller/produto.js';
import { createTableCarrinho, insertCarrinho, updateCarrinho, selectCarrinhos, selectCarrinho, deleteCarrinho } from './controller/carrinho.js';


const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "API rodando S2"
    })
})

router.get('/usuarios', selectUsuarios);
router.get('/usuario', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario', updateUsuario);
router.delete('/usuario', deleteUsuario);

router.get('/produtos', selectProdutos);
router.get('/produto', selectProduto);
router.post('/produto', insertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', deleteProduto);

router.get('/carrinhos', selectCarrinhos);
router.get('/carrinho', selectCarrinho);
router.post('/carrinho', insertCarrinho);
router.put('/carrinho', updateCarrinho);
router.delete('/carrinho', deleteCarrinho);

export default router;