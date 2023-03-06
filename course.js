var buscador = 'DCursos'
var anterior = 'chk1'

document.getElementById('texto').value = ''
document.getElementById('texto').focus()
document.getElementsByClassName('chk1')[0].checked = true
document.getElementsByClassName('chk3')[0].checked = false
document.getElementsByClassName('chk4')[0].checked = false
document.getElementsByClassName('chk2')[0].checked = false

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
        buscador = 'BCursos'
        anterior = 'chk2'
        document.getElementsByClassName('chk3')[0].checked = false
        document.getElementsByClassName('chk1')[0].checked = false
        document.getElementsByClassName('chk4')[0].checked = false
    }

        else
        {

            if(document.getElementsByClassName('chk3')[0].checked)
            {
                buscador = 'GFCursos'
                anterior = 'chk3'
                document.getElementsByClassName('chk2')[0].checked = false
                document.getElementsByClassName('chk1')[0].checked = false
                document.getElementsByClassName('chk4')[0].checked = false
            }
            
                else
                {

                    if(document.getElementsByClassName('chk4')[0].checked)
                    {
                        buscador = 'Google'
                        anterior = 'chk4'
                        document.getElementsByClassName('chk2')[0].checked = false
                        document.getElementsByClassName('chk1')[0].checked = false
                        document.getElementsByClassName('chk3')[0].checked = false
                    }

            else
                {
                    buscador = 'DCursos'
                    anterior = 'chk1'
                    document.getElementsByClassName('chk1')[0].checked = true
                    document.getElementsByClassName('chk2')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                    document.getElementsByClassName('chk4')[0].checked = false
                }
            }
        }
        document.getElementById('butaun').innerText = `Pesquisar curso no ${buscador}.`
    }

function clicar() 
{
    let text = String(document.getElementById('texto').value)

    if(text == '')
    {

        alert('Escreva algo, por favor.')

    }
    else
    {

        if(buscador == 'DCursos')
        {
            window.open(`https://downloadcursos.top/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'BCursos')
        {
            window.open(`https://www.baixandocursos.com/busca?q=${text.replaceAll(' ', '%20')}`, '_blank');
        }
        if(buscador == 'GFCursos')
        {
            window.open(`https://onlinecursosgratuitos.com/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'Google')
        {
            window.open(`https://www.google.com/search?q=baixar+curso+de+${text.replaceAll(' ', '+')}`, '_blank');
        }
    }
}

window.onload = function () { alert('Considere pesquisar livros sobre o curso que deseja, nós temos um site para ajuda-lo; basta apagar o courses na URL para ter acesso à todo o conteúdo do site.') }