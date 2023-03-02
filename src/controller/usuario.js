import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec( 'CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY, nome TEXT, email VARCHAR, senha VARCHAR)')
    })
}

export async function selectUsuarios(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM Usuario')
        .then(usuarios=> res.json(usuarios));
    });
}

export async function selectUsuario(req, res){
    let id = req.body.id;
     openDb().then(db=>{
          db.get('SELECT * FROM Usuario WHERE id=?', [id])
         .then(usuario=> res.json(usuario));
     });
}

export async function insertUsuario(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run( 'INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)', [usuario.nome, usuario.email, usuario.senha]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateUsuario(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run( 'UPDATE Usuario SET nome=?, email=?, senha=? WHERE id=?', [usuario.nome, usuario.email, usuario.senha, usuario.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteUsuario(req, res){
    let id = req.body.id;
     openDb().then(db=>{
          db.get('DELETE FROM Usuario WHERE id=?', [id])
         .then(res=>res)
     });
     res.json({
        "statusCode": 200
    })
}