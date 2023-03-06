var buscador = 'Redecanais'
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
        buscador = 'Vizer'
        anterior = 'chk2'
        document.getElementsByClassName('chk3')[0].checked = false
        document.getElementsByClassName('chk1')[0].checked = false
        document.getElementsByClassName('chk4')[0].checked = false
    }

        else
        {

            if(document.getElementsByClassName('chk3')[0].checked)
            {
                buscador = 'Gofilmes'
                anterior = 'chk3'
                document.getElementsByClassName('chk2')[0].checked = false
                document.getElementsByClassName('chk1')[0].checked = false
                document.getElementsByClassName('chk4')[0].checked = false
            }
            
                else
                {

                    if(document.getElementsByClassName('chk4')[0].checked)
                    {
                        buscador = 'Megafilmes'
                        anterior = 'chk4'
                        document.getElementsByClassName('chk2')[0].checked = false
                        document.getElementsByClassName('chk1')[0].checked = false
                        document.getElementsByClassName('chk3')[0].checked = false
                    }

            else
                {
                    buscador = 'Redecanais'
                    anterior = 'chk1'
                    document.getElementsByClassName('chk1')[0].checked = true
                    document.getElementsByClassName('chk2')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                    document.getElementsByClassName('chk4')[0].checked = false
                }
            }
        }
        document.getElementById('butaun').innerText = `Pesquisar filme/serie no ${buscador}.`
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

        if(buscador == 'Redecanais')
        {
            window.open(`https://redecanais.wf/search.php?keywords=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'Vizer')
        {
            window.open(`https://vizer.tv/pesquisar/${text.replaceAll(' ', '%20')}`, '_blank');
        }
        if(buscador == 'Gofilmes')
        {
            window.open(`https://gofilmes.me/search.php?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'Megafilmes')
        {
            window.open(`https://megafilmeshd.top/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
    }
}