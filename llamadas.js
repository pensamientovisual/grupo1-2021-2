const svg = document.getElementById("main-svg-container3");
 
const WIDTH = 800
      
const HEIGHT = 500

svg.setAttribute("width",WIDTH);
svg.setAttribute("height",HEIGHT);

const margins = {top:10, bottom:20, left:40,right:20};

const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 
const datos = [
    {
      "Mes_ano": "ene-20",
      "Llamadas": 46
    },
    {
      "Mes_ano": "feb-20",
      "Llamadas": 43
    },
    {
      "Mes_ano": "mar-20",
      "Llamadas": 45
    },
    {
      "Mes_ano": "abr-20",
      "Llamadas": 36
    },
    {
      "Mes_ano": "may-20",
      "Llamadas": 38
    },
    {
      "Mes_ano": "jun-20",
      "Llamadas": 38
    },
    {
      "Mes_ano": "jul-20",
      "Llamadas": 40
    },
    {
      "Mes_ano": "ago-20",
      "Llamadas": 42
    },
    {
      "Mes_ano": "sept-20",
      "Llamadas": 41
    },
    {
      "Mes_ano": "oct-20",
      "Llamadas": 44
    },
    {
      "Mes_ano": "nov-20",
      "Llamadas": 43
    },
    {
      "Mes_ano": "dic-20",
      "Llamadas": 47
    },
    {
      "Mes_ano": "ene-21",
      "Llamadas": 42
    },
    {
      "Mes_ano": "feb-21",
      "Llamadas": 38
    },
    {
      "Mes_ano": "mar-21",
      "Llamadas": 44
    },
    {
      "Mes_ano": "abr-21",
      "Llamadas": 38
    },
    {
      "Mes_ano": "may-21",
      "Llamadas": 42
    },
    {
      "Mes_ano": "jun-21",
      "Llamadas": 39
    },
    {
      "Mes_ano": "jul-21",
      "Llamadas": 41
    },
    {
      "Mes_ano": "ago-21",
      "Llamadas": 41
    }
   ]


const xDataRange = {
    min: 0,
    max: 0
}

const yDataRange = {
    min: 0,
    max: 0
};

const aDataRange = {
    min: 0,
    max: 0
};

const lista1=[]

for (let y of datos){
  lista1.push([y.Mes_ano]);
};

console.log(lista1);

const lista2=[]

for (let y of datos){
  lista2.push(y.Llamadas);
};

console.log(lista2);

// Obtener una referencia al elemento canvas del DOM
const $grafica3 = document.querySelector("#grafica3");
// Las etiquetas son las que van en el eje X. 
const etiquetas3 = lista1;


// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosjeje3 = {
    label: "Llamadas en promedio por numero movil",
    data: lista2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(158, 200, 215, 0.3)', // Color de fondo
    borderColor: 'rgba(40, 164, 198, 1)', // Color del borde // Color del borde
    borderWidth: 3,// Ancho del borde
    
};




new Chart($grafica3, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas3,
        datasets: [
            datosjeje3,
            // Aquí más datos...
        ]
    },
    options: {
        legend: {
            labels: {
              // This more specific font property overrides the global property
                fontColor: 'red'
            }
        },


        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

    

