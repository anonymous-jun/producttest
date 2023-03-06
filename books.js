var buscador = 'elivros'
var anterior = 'chk1'

document.getElementById('texto').value = ''
document.getElementById('texto').focus()
document.getElementsByClassName('chk1')[0].checked = true
document.getElementsByClassName('chk3')[0].checked = false
document.getElementsByClassName('chk2')[0].checked = false
document.getElementsByClassName('chk4')[0].checked = false

document.getElementById('texto').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("butaun").click();
    }
  })

function trocar() {
    
    document.getElementById('texto').focus()
    document.getElementsByClassName(anterior)[0].checked = false

    if (document.getElementsByClassName('chk2')[0].checked)
    {
        buscador = 'docer'
        anterior = 'chk2'
        document.getElementsByClassName('chk3')[0].checked = false
        document.getElementsByClassName('chk1')[0].checked = false
        document.getElementsByClassName('chk4')[0].checked = false
        document.getElementsByClassName('chk5')[0].checked = false
    }

        else
        {

            if(document.getElementsByClassName('chk3')[0].checked)
            {
                buscador = 'lelivros'
                anterior = 'chk3'
                document.getElementsByClassName('chk2')[0].checked = false
                document.getElementsByClassName('chk1')[0].checked = false
                document.getElementsByClassName('chk4')[0].checked = false
                document.getElementsByClassName('chk5')[0].checked = false
            }

            else {

                if(document.getElementsByClassName('chk5')[0].checked)
                {
                    buscador = 'Z-lib'
                    document.getElementsByClassName('chk2')[0].checked = false
                    anterior = 'chk5'
                    document.getElementsByClassName('chk4')[0].checked = false
                    document.getElementsByClassName('chk1')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                }
                else
                {

                if (document.getElementsByClassName('chk4')[0].checked)
                {
                    buscador = 'Google'
                    anterior = 'chk4'
                    document.getElementsByClassName('chk2')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                    document.getElementsByClassName('chk1')[0].checked = false
                    document.getElementsByClassName('chk5')[0].checked = false
                }

                else{
                    buscador = 'elivros'
                    anterior = 'chk1'
                    document.getElementsByClassName('chk1')[0].checked = true
                    document.getElementsByClassName('chk2')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                    document.getElementsByClassName('chk4')[0].checked = false
                    document.getElementsByClassName('chk5')[0].checked = false
                    }
                }
            }
        }
        document.getElementById('butaun').innerText = `Pesquisar livro no ${buscador}.`
    }

function clicar() 
{
    let text = String(document.getElementById('texto').value)

    if(text == '')
    {

        alert('Escreva algo, animal')

    }
    else
    {

        if(buscador == 'elivros')
        {
            window.open(`https://elivros.love/Buscar?q=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'docer')
        {
            window.open(`https://docero.com.br/show/?q=${text.replaceAll(' ', '%20')}`, '_blank');
        }
        if(buscador == 'lelivros')
        {
            window.open(`https://lelivros.love/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'Z-lib')
        {
            window.open(`https://br1lib.org/s/${text.replaceAll(' ', '%20')}`, '_blank')
        }
        if(buscador == 'Google')
        {
        window.open(`https://www.google.com.br/search?q=livro+${text.replaceAll(' ', '+')}+ler+online+grátis`, '_blank');
        }
    }
}