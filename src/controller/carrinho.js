import { openDb } from '../configDB.js';

export async function createTableCarrinho(){
    openDb().then(db=>{
        db.exec( 'CREATE TABLE IF NOT EXISTS Carrinho (id INTEGER PRIMARY KEY, usuario_id INTEGER  REFERENCES Usuario (id), produto_id INTEGER REFERENCES Produto (id), status VARCHAR)')
    })
}

export async function selectCarrinhos(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM Carrinho')
        .then(carrinhos=> res.json(carrinhos));
    });
}

export async function selectCarrinho(req, res){
    let id = req.body.id;
     openDb().then(db=>{
          db.get('SELECT * FROM Carrinho WHERE id=?', [id])
         .then(carrinho=> res.json(carrinho));
     });
}

export async function insertCarrinho(req, res){
    let carrinho = req.body;
    if(carrinho.status !== "salvo" && carrinho.status !== "comprado"){
        res.send("Status inválido.")
    }
    openDb().then(db=>{
        db.run( 'INSERT INTO Carrinho (usuario_id, produto_id, status) VALUES (?, ?, ?)', [carrinho.usuario_id, carrinho.produto_id, carrinho.status]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateCarrinho(req, res){
    let carrinho = req.body;
    openDb().then(db=>{
        db.run( 'UPDATE Carrinho SET usuario_id=?, produto_id=?, status=? WHERE id=?', [carrinho.usuario_id, carrinho.produto_id, carrinho.status, carrinho.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteCarrinho(req, res){
    let id = req.body.id;
     openDb().then(db=>{
          db.get('DELETE FROM Carrinho WHERE id=?', [id])
         .then(res=>res)
     });
     res.json({
        "statusCode": 200
    })
}