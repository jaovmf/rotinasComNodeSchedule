//npm i node-schedule
//npm i express

const schedule = require("node-schedule");
const express = require("express");
const port = 3000;
const app = express();

//SCHEDULE PARA RODAR AS 2 DA MANHÃ
// const job = schedule.scheduleJob("0 2 * * *", () => {
//   console.log("Rodei as 2 da manhã");
//   axios.get("http://localhost:3000"); //MUDAR PARA URL DO SERVIDOR EM PRODUÇÃO
// });

// SCHEDULE PARA RODAR A CADA 5 SEGUNDOS PARA FAZER TESTES
// const job = schedule.scheduleJob("*/5 * * * * *", () => {
//   console.log("Rodando a cada 5 segundos");

// });

//SCHEDULE PARA RODAR TODA QUARTA AS 11:05 DA MANHÃ
// const job = schedule.scheduleJob("11 11 * * 3", () => {
//   console.log("Rodando toda quarta as 11:05 da manhã");
//   axios.get("http://localhost:3000"); //MUDAR PARA URL DO SERVIDOR EM PRODUÇÃO
// });

//SCHEDULE PARA RODAR SEGUNDA E SEXTA AS 11:05 DA MANHÃ
// const job = schedule.scheduleJob("11 11 * * 1,5", () => {
//   console.log("Rodando segunda e sexta as 11:05 da manhã");
//   axios.get("http://localhost:3000"); //MUDAR PARA URL DO SERVIDOR EM PRODUÇÃO
// });

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
