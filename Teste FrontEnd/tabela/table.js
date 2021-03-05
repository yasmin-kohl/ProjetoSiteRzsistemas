let lista = [];

const clique = () => {
    const nomeNoInput = document.getElementById('inputNome').value;
 
    const numNoInput = document.getElementById('inputNum').value;
    const pessoa = {
        nome: nomeNoInput,
   
        numero: numNoInput,
    };
    lista.push(pessoa)
    document.getElementById('inputNome').value='';
    
    document.getElementById('inputNum').value='';
    listarDados();
}
const limparLista = () => {
    lista = [];
    listarDados();

}

listarDados = () => {
   document.getElementById('lista').innerHTML= '';
    lista.forEach(pessoa =>{
        document.getElementById('lista').innerHTML += 
        '<tr>' + 
            '<td>' + pessoa.nome + '</td>' +
            '<td>' + pessoa.numero + '</td>' +
        '</tr>';           
    });
}