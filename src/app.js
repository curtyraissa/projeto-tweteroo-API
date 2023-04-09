import express from "express";
import cors from "cors";

const app = express(); //criacao do app servidor

//configuracoes
app.use(cors()); // acessar as portas
app.use(express.json()); //ler no formato json

const tweetsCompleto = [
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
]
app.get("/tweets", (request, response) => {
  // const { username } = request.params  //const username = request.params.username
  // const tweet = tweetsCompleto.find((item) => item.username === username)
  response.send(tweetsCompleto)
})

const usuarios = []
app.post("/sign-up", (request, response) => {
  const { username, avatar } = request.body
  const novoUsuario = { username, avatar }
  usuarios.push(novoUsuario)
  response.send("OK")
})

const tweets = []
app.post("/tweets", (request, response) => {
  const { username, tweet } = request.body
  const novoTweet = { username, tweet }
  tweets.push(novoTweet);
  response.send("OK");
})

const PORT = 5000;
app.listen(PORT, () => { console.log(`servidor rodando na porta ${PORT}`) });