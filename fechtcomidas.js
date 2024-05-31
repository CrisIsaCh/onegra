
const llamadoApi = async () => {
    const url = 'https://api.spoonacular.com/recipes/complexSearch';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '785f1593719649beb5d1d76c6b2db549'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log((result.results));
        mostrarComida(result.results)
    } catch (error) {
        console.error(error);
    }
}
llamadoApi();
const mostrarComida = (json) => {
    console.log(json);

    let box = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        box += ` 
        <div class="box">
       
             <img src="${json[i].image}">
             
         <div class="content">
             <h3>${json[i].title}</h3>
             
         </div>
        </div> 
        `

    }
    document.getElementById('galeria').innerHTML = box;
}
