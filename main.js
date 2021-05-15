
function validar(event){
    event.preventDefault()


    var err = document.querySelector('#err')
    err.style.color = 'red'
    
    var expresion = /\w+@\w+\.+[a-z]/;
    
    var menssagemErr = []

    if (document.form.name.value=="") {
        menssagemErr.push("Nome é Obrigatorio")  
        document.form.name.focus()
    
    }else if (document.form.email.value=="") {
        menssagemErr.push("e-mail é Obrigatorio")
        document.form.email.focus() 

    }else if (!expresion.test(document.form.email.value)) {
        menssagemErr.push("Email Incorreto")
    }
    
    else if (document.form.assunto.value=="" ) {
        menssagemErr.push("Campo obrigatorio")
        document.form.assunto.focus() 

    }else if (document.form.textarea.value=="" || document.form.textarea.value.length > 150 ){
        menssagemErr.push("Mensagem é obrigatorio. Deve conter no maximo 300 carateres") 
        document.form.textarea.focus()
      
    } 
    err.innerHTML = menssagemErr.join(',')

}
    document.querySelector('form').addEventListener('submit',validar)


