    function calcular() {
      var txtv = document.querySelector('#txtvel')
      var res = document.querySelector('#res')
      var vel = Number(txtv.value)

      // Muda a cor do botão ao clicar
      var botao = document.querySelector('#botao')
      botao.classList.add('clicado')

      res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`

      if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
      }

      res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    }
