//Objeto

let pessoa = {
    nome: 'Kamila',
    sobreNome: 'Marcon',
    empresa: 'Cesf',
    cargo:'estudante'
};

console.log(pessoa);
console.log(pessoa.nome);

//desconstruir o objeto

const {nome,cargo,empresa}=pessoa;
console.log(nome);
console.log(empresa);


//Array

let nomes = [
    'Aparicio','Bernadete','Cremilda'];
    console.log(nomes);

//descontruindo Array

    let{0:primeiroNome,1:segundoNome,2:terceiroNome}=nomes;
    console.log(segundoNome);

//outro jeto de desconstruir array

let [primNome,segNome,tercNome]=nomes;
console.log(tercNome);