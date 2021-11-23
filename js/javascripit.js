let caixa =document.getElementById('caixa');
//definir variavel caixa

// adicionar eventos na variavel caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// criar função da variavel clicar (ATIVA QUANDO O USUARIO CLICAR DENTRO DA DIV)
function clicar(){
    caixa.innerHTML ='você clicou';
    caixa.style.background ='red';
    caixa.style.color = 'white';
   
}
//criar função da variavel entrar (ATIVADA QUNADO O MOUSE PASSAR DENTRO DA DIV)
function entrar(){
    caixa.innerHTML = 'Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';

}
// Criar função da variavel sair(Ativa quando tirar o nome dnetro da div)
function sair(){
    caixa.innerHTML = '<strong>Passe o mouse</strong>';
    caixa.style.background = 'blue';
    caixa.style.color = 'porple';
}
