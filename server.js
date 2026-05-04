const express = require("express");
const app = express();

app.use(express.json());
let alunos = [
    {id:1,nome:"Ana"},
    {id:2,nome:"Carlos"},
    {id:3,nome:"Maria"}
];
//GET / alunos
//lista todos os alunos 
app.get("/alunos",(req,res)=>{
    res.json(alunos)
})

// GET / alunos/:id
//Busca alunos por id
app.get("/alunos/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const aluno = alunos.find(a => a.id === id)

    if(!aluno){
        return res.status(404).json({erro: "Aluno não encontrado"})
    }
    res.json(aluno);

})

//POST /alunos 
//Cadastrar aluno
app.post("/alunos",(req,res)=>{
    const {nome} = req.body;
    if(!nome){
        return res.status(400).json({erro:"Nome é obrigatório"});
    }
    const novoAluno = {
        id: alunos.lengh + 1,
        nome: nome
    };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
})

app.listen(3000, ()=>{console.log("Servidor ligado")})