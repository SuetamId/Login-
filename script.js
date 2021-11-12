function validate() {

  let inputName = document.getElementById('username').value
  let inputPassword = document.getElementById('password').value

  if (inputName == '' )
  {
    document.getElementById('txtValName').innerHTML = '*campo obrigatorio '
  } 
  if (inputPassword == '') {
    document.getElementById('txtValPassword').innerHTML = '*campo obrigatorio '
  }
      
  else{
    window.location.href = "file:///C:/Users/Administrator/Desktop/Projeto%20cadastro/cadastro%20js/cadastro/index%20(2).html";
  }

}
var nome = document.getElementById('username')
nome.addEventListener('focus', () => {
  nome.style.borderColor = 'rgb(17, 17, 17)';
});
nome.addEventListener('blur', () => {
  nome.style.borderColor = 'white'
});
var password = document.getElementById('password')
password.addEventListener('focus', () => {
  password.style.borderColor = 'rgb(17, 17, 17)';
});
password.addEventListener('blur', () => {
  password.style.borderColor = 'white'
});


