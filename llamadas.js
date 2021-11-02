const svg = document.getElementById("main-svg-container3");
 
const WIDTH = 1000
      
const HEIGHT = 100

svg.setAttribute("width",WIDTH);
svg.setAttribute("height",HEIGHT);

const margins = {top:10, bottom:20, left:40,right:20};

const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 
const datos = [
    {
      "Mes_ano": "Ene-20",
      "Llamadas": 46
    },
    {
      "Mes_ano": "Feb-20",
      "Llamadas": 43
    },
    {
      "Mes_ano": "Mar-20",
      "Llamadas": 45
    },
    {
      "Mes_ano": "Abr-20",
      "Llamadas": 36
    },
    {
      "Mes_ano": "May-20",
      "Llamadas": 38
    },
    {
      "Mes_ano": "Jun-20",
      "Llamadas": 38
    },
    {
      "Mes_ano": "Jul-20",
      "Llamadas": 40
    },
    {
      "Mes_ano": "Ago-20",
      "Llamadas": 42
    },
    {
      "Mes_ano": "Sept-20",
      "Llamadas": 41
    },
    {
      "Mes_ano": "Oct-20",
      "Llamadas": 44
    },
    {
      "Mes_ano": "Nov-20",
      "Llamadas": 43
    },
    {
      "Mes_ano": "Dic-20",
      "Llamadas": 47
    },
    {
      "Mes_ano": "Ene-21",
      "Llamadas": 42
    },
    {
      "Mes_ano": "Feb-21",
      "Llamadas": 38
    },
    {
      "Mes_ano": "Mar-21",
      "Llamadas": 44
    },
    {
      "Mes_ano": "Abr-21",
      "Llamadas": 38
    },
    {
      "Mes_ano": "May-21",
      "Llamadas": 42
    },
    {
      "Mes_ano": "Jun-21",
      "Llamadas": 39
    },
    {
      "Mes_ano": "Jul-21",
      "Llamadas": 41
    },
    {
      "Mes_ano": "Ago-21",
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
    label: "Llamadas en promedio por número móvil",
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

    

