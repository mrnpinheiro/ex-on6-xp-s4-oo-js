// Modelos de criar objetos

// Variável
const reprograma = {
    curso: 'BackEnd',
    turma: 6,
    modelo: 'online',
    iniciada: true
};

// Palavra reservada 'new'
const reprograma = new Object();

reprograma.curso = 'BackEnd';
reprograma.turma = 6;
reprograma.modelo = 'online';
reprograma.iniciada = true;

// Função
function Reprograma(curso, turma, modelo, iniciada) {
    this.curso = curso;
    this.turma = turma;
    this.modelo = modelo;
    this.iniciada = iniciada; 
}

const reprograma1 = new Reprograma('BackEnd', 6, 'online', true);
const reprograma2 = new Reprograma('FrontEnd', 12, 'presencial', false);