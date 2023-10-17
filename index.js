import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import cors from 'cors';

const app = express();

const IP = 'localhost';
const PORTA = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(routes);  
app.use(cors({
  origin: '*',
  methods: 'HEAD,GET,POST,PUT,DELETE',
}));

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(PORTA, IP, () => console.log("Servidor iniciado na porta 8080"));