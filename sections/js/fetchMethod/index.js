console.log("Connected...");

// Ejemplo 001 - LLamando a un recurso/archivo local tipo .txt a traves de fetch()
let getText = () => {
  // dependender del metodo fetch + promisas tipo .then() y un catch()
  // ./recursos/sample.txt
  fetch("./recursos/sample.txt")
    .then(
      (infoQueRecibimos) => infoQueRecibimos.text() // callback en ingles || lo mismo que una fucnion anonima que se ejecuta :)
    )
    .then(
      (
        informacionarseadaATextMedianteElMetodoAnteriorConDependenciaDeMEtodoText
      ) => {
        //console.log(informacionLimpia);
        let simpleInfo =
          informacionarseadaATextMedianteElMetodoAnteriorConDependenciaDeMEtodoText;
        document.querySelector("#output").innerText = simpleInfo;
      }
    )
    .catch((error) => console.log(error));
};

document.querySelector("#getText").addEventListener("click", getText);

// Ejemplo 002 -  LLamando a un recurso/archivo local tipo .json a traves de fetch()
// Depender del metodo json() para limpiar y parsear el tipo de recurso a un formato que podamos usar en JS
let getJson = () => {
  // 1ro - llamamos al recurso en este caso un recurso/archivo tipop json()
  fetch("./recursos/users.json")
    // 2do limpiamos el recurso a traves de un metodo nativo === json()
    .then((infoDeRickMortyNoLimpia) => infoDeRickMortyNoLimpia.json())
    // 3ro - vamos a usar DOM manipulation para injectar la info dentro del HTML
    .then((infoDeRickMortyLimpia) => {
      console.table(infoDeRickMortyLimpia);
      // definimos una variable vacial que usaremos despues como contenedor general!
      let infoDeJson = "";
      infoDeRickMortyLimpia.forEach((cadaPocisionDeArrayRickMorty) => {
        infoDeJson += `
            <ul>
                <li>${cadaPocisionDeArrayRickMorty.id}</li>
                <li>${cadaPocisionDeArrayRickMorty.name}</li>
                <li>${cadaPocisionDeArrayRickMorty.profession}</li>
            </ul>
            `;
      });
      let domInsertion = (document.querySelector("#output").innerHTML =
        infoDeJson);
      return domInsertion;
    })
    // 4to - aprovechamos el metodo extra relacionado al fetch que es catch() para registrar algo en consola si hay un rechazo a la llamada al recurso/archivo
    .catch((error) => console.log(error));
};
document.querySelector("#getJson").addEventListener("click", getJson);

// Ejemplo 003 - LLamando a un recurso/archivo en linea tipo .json a traves de fetch()
// url que usaremos === https://jsonplaceholder.typicode.com/posts
// Depender del metodo json() para limpiar y parsear el tipo de recurso a un formato que podamos usar en JS
// Usando async await
let getInfoExternalApi = async () => {
  await fetch("https://jsonplaceholder.typicode.com/albums")
    .then((infoDeJsonExterna) => {
      console.log(infoDeJsonExterna);
      return infoDeJsonExterna.json();
    })
    .then((infoDeJsonExternaLimpia) => {
      console.log(infoDeJsonExternaLimpia);
      // USAR DOM para insertar info del json dentro del documento
      let infoEstructurada = "";
      //infoDeJsonExternaLimpia.forEach((parametro) => console.log(parametro));
      infoDeJsonExternaLimpia.forEach((pepito) => {
        infoEstructurada += `
              <div class="jsonInfo">
              <ul>
                <li>${pepito.title}</li>
                <li>${pepito.id}</li>
                <li>${pepito.userId}</li>
              </ul>
              </div>
              `;
      });
      let infoReadyForDoc = (document.querySelector("#output").innerHTML =
        infoEstructurada);
      return infoReadyForDoc;
    })
    .catch((error) => console.log(error));
};
document
  .querySelector("#getExternalApi")
  .addEventListener("click", getInfoExternalApi);

// Ejemplo 004 -  METODO NUEVO DE HTTP "POST", - VAMOS A ENVIAR o ENSENCIA POST INFORMACION DE UN FORMULARIO DE NUESTRO DOC DE HTML A ESTE RECURSO ONLINE QUE NOS DEJA APRENDE 'JSONPLACEHOLDER'
let addPost = async (eventoTipoDOM) => {
  // Verificacion que recibimops info del evento por parte del parametro definido arriba
  console.log(eventoTipoDOM);
  // Frenamos el comportamiento inicial del elemento que esta asociado al evento dentro de esta funcion que conjunto al dom selection del eventListener de abajo frena el comportamineto.
  eventoTipoDOM.preventDefault();
  let inputUsuarioTitulo = document.querySelector("#title").value;
  let inputUsuarioBody = document.querySelector("#body").value;
  let myTesting = "Something random like a string...";
  // Vamos a usar el metodo fetch() pero para enviar informacion -
  // Como expandimos el metodo fetch()
  // Ya sabemos que el metodo inicial recibe un argumento que es un "" donde le pasamos el recurso
  // Para expandirlo estan sencillo como añadirle una coma, y abrir un {} con las llaves y valores que corresponden al responseObject
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    // pasamos la llave/valer correspondiente al tipo de metodo http que queremos usar, en mayuscula
    method: "POST",
    // El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
    body: JSON.stringify({
      title: inputUsuarioTitulo,
      body: inputUsuarioBody,
      //someRandomValue: myTesting,
    }),
    // headers
    // Manera de especificzr que tipon de dato se esta envizando dentro de la llamada/respuesto tipo http para evitar algun error o alguna corrupcion de data mieentra se hace la comunicacion/envio de informaicion.
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((respuestaDeFormulario) => {
      console.log(respuestaDeFormulario);
      return respuestaDeFormulario.json();
    })
    .then((info) => {
      console.log(info);
    });
  //.catch((error) => console.log(error));
};
document.querySelector("#addPost").addEventListener("click", addPost);
