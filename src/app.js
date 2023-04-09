import express from "express";
import cors from "cors";

const app = express(); //criacao do app servidor

//configuracoes
app.use(cors()); // acessar as portas
app.use(express.json()); //ler no formato json

const tweetsCompleto = []

const usuarios = []
app.post("/sign-up", (request, response) => {

  const {username, avatar} = request.body
  const novoUsuario = {
    username: username,
    avatar: avatar
  }
  usuarios.push(novoUsuario)
  response.send("OK")
})

const tweets = []
app.post("/tweets", (request,response) => {
  const {username, tweet} = request.body
  const novoTweet = {
    username: username,
    tweet: tweet
  }
  tweets.push(novoTweet);
  response.send("OK");
  }
)


app.get("/tweets", (request, response) => {
  const {username} = request.params
  // const username = request.params.username
    response.send(tweetsCompleto)
})

const PORT = 5000;
app.listen(PORT, () => { console.log(`servidor rodando na porta ${PORT}`) });