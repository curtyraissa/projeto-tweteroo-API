import express from "express";
import cors from "cors";

const app = express(); //criacao do app servidor

//configuracoes
app.use(cors()); // acessar as portas
app.use(express.json()); //ler no formato json

const usuarios = []
const tweets = []

app.post("/sign-up", (request, response) => {
  const { username, avatar } = request.body
  const novoUsuario = { username, avatar }
  usuarios.push(novoUsuario)
  response.send("OK")
})

app.post("/tweets", (request, response) => {
  const { username, tweet } = request.body
  const novoTweet = { username, tweet }
  const cadastrado = usuarios.find(item => item.username === username)
  if(cadastrado){
  tweets.push(novoTweet);
  response.send("OK");
  } else { response.send("UNAUTHORIZED")}
})

app.get("/tweets/:username", (request, response) => {
  const { username } = request.params
  const tweetsCompleto = tweets.find((item) => {
    if(item.username === username){
      return item.avatar
    }
  })
  response.status(200).send(tweetsCompleto)
})

//rodando servidor na porta 5000
const PORT = 5000;
app.listen(PORT, () => { console.log(`servidor rodando na porta ${PORT}`) });