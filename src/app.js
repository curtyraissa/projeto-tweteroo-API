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

const usuarios = []
app.post("/sign-up", (request, response) => {
  console.log(request.body)
  const novoUsuario = {
    username: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
  }
  usuarios.push(novoUsuario)
  response.send("OK")
})

const tweets = []
app.post("/tweets", (request,response) => {
  console.log(request.body)
  const novoTweet = {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!"
  }
  tweets.push(novoTweet);
  response.send("OK");
  }
)


app.get("/tweets", (request, response) => {
  if (tweetsCompleto != []) {
    response.send(tweetsCompleto)
  } else { response.send([]) }

})

const PORT = 5000;
app.listen(PORT, () => { console.log(`servidor rodando na porta ${PORT}`) });