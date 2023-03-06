var buscador = 'Steam Unlocked'
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
        buscador = 'Skidrow'
        anterior = 'chk2'
        document.getElementsByClassName('chk3')[0].checked = false
        document.getElementsByClassName('chk1')[0].checked = false
        document.getElementsByClassName('chk4')[0].checked = false
    }

        else
        {

            if(document.getElementsByClassName('chk3')[0].checked)
            {
                buscador = 'JogosTorrent'
                anterior = 'chk3'
                document.getElementsByClassName('chk2')[0].checked = false
                document.getElementsByClassName('chk1')[0].checked = false
                document.getElementsByClassName('chk4')[0].checked = false
            }
            
                else
                {

                    if(document.getElementsByClassName('chk4')[0].checked)
                    {
                        buscador = 'TJ' //TorrentJogos
                        anterior = 'chk4'
                        document.getElementsByClassName('chk2')[0].checked = false
                        document.getElementsByClassName('chk1')[0].checked = false
                        document.getElementsByClassName('chk3')[0].checked = false
                    }

            else
                {
                    buscador = 'Steam Unlocked'
                    anterior = 'chk1'
                    document.getElementsByClassName('chk1')[0].checked = true
                    document.getElementsByClassName('chk2')[0].checked = false
                    document.getElementsByClassName('chk3')[0].checked = false
                    document.getElementsByClassName('chk4')[0].checked = false
                }
            }
        }
        document.getElementById('butaun').innerText = `Pesquisar jogo no ${buscador}.`
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

        if(buscador == 'Steam Unlocked')
        {
            window.open(`https://steamunlocked.net/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'Skidrow')
        {
            window.open(`https://www.skidrowreloaded.com/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'JogosTorrent')
        {
            window.open(`https://jogostorrents.site/?s=${text.replaceAll(' ', '+')}`, '_blank');
        }
        if(buscador == 'TJ')
        {
            window.open(`https://torrentjogos.net/search.php?q=${text.replaceAll(' ', '+')}`, '_blank');
        }
    }
}