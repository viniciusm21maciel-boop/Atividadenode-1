const htt = require("http");
const server = htt.createServer((req, res) => {
     console.log(req.method);
     res.end("Servidor Node.js funfando certinho");
});
server.listen(3000, () => {
     console.log("Servidor rodando na porta 3000");
     
});