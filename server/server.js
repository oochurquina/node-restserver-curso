require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/usuario',getUsuario);
app.post('/usuario',postUsuario);
app.put('/usuario/:id',putUsuario);
app.delete('/usuario',deleteUsuario)



app.listen(process.env.PORT,mensajeEscucha);

function getUsuario(req,res) {
    res.json('GET USUARIO');
}

function postUsuario(req,res) {
    let usuario= req.body;
    if (usuario.nombre===undefined) {
        res.status(400).json({
            ok: false,
            msj: 'El nombre es necesario'
        });
    } else {
        res.status(200).json({
            usuario,
            msj: 'POST USUARIO'
        });
    }
}
function putUsuario(req,res) {
    console.log(req.params);
    let {id} = req.params
    
    res.json({
        id,
        msj: 'PUT USUARIO',
    });
}
function deleteUsuario(req,res) {
    res.json('DELETE USUARIO');
}
function mensajeEscucha() {
    console.log(`Escuchando puerto: `, process.env.PORT);
}
