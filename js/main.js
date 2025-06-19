let messages = ["Há algo de bom neste mundo e vale a pena lutar por isso", "Seu coração é livre, tenha coragem de segui-lo.", "Não espere por uma crise para descobrir o que é importante em sua vida."];

let btn = document.querySelector("#msg_btn");
let msgResponse = document.querySelector("#msg_response");
btn.addEventListener("click", e => {
  let randomChoice = Math.floor(Math.random() * 3);
  msgResponse.innerHTML = messages[randomChoice];
  setTimeout(() => {
    msgResponse.innerHTML = "";
  }, 10000);
});