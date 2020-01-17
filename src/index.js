const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://pedroksty:99493557@cluster0-2cuuk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333);




//get, post, put, delete

// Query params: req.query (Filtros, ordenação, paginação)
// Route params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)