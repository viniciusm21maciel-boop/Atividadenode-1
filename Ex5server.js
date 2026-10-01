const http = require("http"); 
const server = http.createServer((req, res) => {
    console.log(req.url); 

    res.setHeader("Content-Type", "text/plain; charset=utf-8"); 
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Oi, bem vindo ao meu servidor bem legal!");
    }
    else if (req.url === "/sobre") {
        res.statusCode = 200;
        res.end("Você está na página sobre");
    }
    else if (req.url === "/Alunos") {
        res.statusCode = 200;
        res.end("Você está na página de alunos");
    }
    else if (req.url === "/contato") {
        res.statusCode = 200;
        res.end("Você está na página de contato");
    }
    else {
        res.statusCode = 404;
        res.end("ERROR 404 - Página não encontrada");
    }


});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});