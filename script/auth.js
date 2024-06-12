import users from './users-data.js'


let button = document.getElementById('form-submit')

button.addEventListener('submit', function submitLogin(submit) {
    let getUser = document.getElementById('user')
    let getPass = document.getElementById('pass')
    let authLogin = false

    for (let i in users) {
        if (getUser.value == users[i].login && getPass.value == users[i].pass) {
            submit.preventDefault()
            location.href = "index.html"
            authLogin = true
            break
        }
    }

    if(authLogin == true){
        alert('Login efetuado com sucesso!')
        
    }else{
        alert("Usuário ou senha estão incorretos!")
        // document.getElementById('user').value = ""
        // document.getElementById('pass').value = ""
        getUser.value = ""
        getPass.value = ""
    }
})



