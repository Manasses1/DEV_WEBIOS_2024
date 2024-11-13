    //   document.body.style.backgroundColor = "Black"

      document.title = "Socorro DOM"

      // aLTERAR O ATRIBUTO lANG
      document.documentElement.lang = "pt-br"


      //Criação de elementos comJS
      let campoNovo = document.createElement('button')

      //inserir estilo
      campoNovo.style.backgroundColor = "red"
      campoNovo.style.borderRadius = "5px"

      // Informar em qual elemento queremos inserir o botão
      document.body.appendChild(campoNovo).innerHTML = "Enviar"