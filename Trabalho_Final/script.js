function validar(frm){ 
    if(frm.name.value == ""){
        alert("Campo nome completo não informado")
        nome.focus();
    };
    if(frm.email.value == ""){
        alert("Campo email completo não informado")
        email.focus();
    };
    if(frm.password.value == ""){
        alert("Campo senha não informado")
        password.focus();
    };
    if(frm.password-again.value != frm.password.value){
        alert("Senhas não coincidem")
        password-again.focus();
    };
    if(frm.password-again.value == ""){
        alert("Campo senha novamente não informado")
        password-again.focus();
    };
    //Eu tentei fazer essa parte da seleção do sexo mas simplesmente nao deu certo :(
    escolhaSexo = -1;
    for(x = frm.sex.lenght -1; x > -1; x--) 
    {
        if(frm.sex[x].checked) 
        {
        chooseSex = x;
        }
    }
    if(chooseSex == -1) 
    {
        alert("Campo sexo não informado");
        frm.sex[0].focus();
        return false;
    }
    if(frm.birth-date.value == ""){
        alert("Campo data de nascimento não informado")
        birth-date.focus();
    };
}

function submit_index(){
    {
        location.href = "index.html";
    }
}
function mensagem(){
    alert("Cadastro criado com sucesso");
};

$(document).ready(function(){
    $('#name').mask('SSSS',{'S': {pattern: /[a-zA-Z]/}});
    $('#date').mask('11/11/1111');
    $('#phone').mask('(99) 9999-9999');
});