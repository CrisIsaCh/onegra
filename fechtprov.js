var select = document.querySelector("#provincias-select");
const url = 'https://apis.datos.gob.ar/georef/api';
const urlprovincias = `${url}/provincias`;
    
    fetch(urlprovincias).then(r => r.json()).then(resultado => {
      console.log(resultado.provincias);
      console.log(typeof (resultado.provincias))
      
     resultado=resultado.provincias.sort((a,b)=>a.nombre.localeCompare(b.nombre)); 

      for (var kv of resultado) {
        var opcion = this.document.createElement('option');
        opcion.text=kv.nombre;
        opcion.value=kv.id
        provincia.appendChild(opcion);
      }
      
     
     
    });