let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () => {
    // Faço a consulta na API e retorno o JSON na variavel resp
    await fetch(URL).then((response) => {
        // Transformar o arquivo JSON em OBJ
        return response.json()
    }).then((response) => {
        // Apresntar as informações para o usuario
        document.getElementById('mostraJSON').innerText = JSON.stringify(response          );

        let image = `<img style="width:200px; heigth: 200px;" src="${response.essage}" alt="">`

        document.getElementById('mostraIMG').innerHTML = image;
    })



    // Pegar o retorno em JSON e transformar em um objeto
    //     let exemplo =  resp.json() 
    //     console.log(exemplo)
}

DogApi()