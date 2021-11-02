const svg = document.getElementById("main-svg-container");
 
const WIDTH = 1500;
      
const HEIGHT = 800;
 

svg.setAttribute("width",WIDTH);
svg.setAttribute("height",HEIGHT);

const margins = {top:10, bottom:20, left:40,right:20};



const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 

const data_amazon =[
  {
    "ano_quatrimistre": "2005-Q1",
    "ventas": 1.902
  },
  {
    "ano_quatrimistre": "2005-Q2",
    "ventas": 1.753
  },
  {
    "ano_quatrimistre": "2005-Q3",
    "ventas": 1.858
  },
  {
    "ano_quatrimistre": "2005-Q4",
    "ventas": 2.977
  },
  {
    "ano_quatrimistre": "2006-Q1",
    "ventas": 2.279
  },
  {
    "ano_quatrimistre": "2006-Q2",
    "ventas": 2.139
  },
  {
    "ano_quatrimistre": "2006-Q3",
    "ventas": 2.307
  },
  {
    "ano_quatrimistre": "2006-Q4",
    "ventas": 3.986
  },
  {
    "ano_quatrimistre": "2007-Q1",
    "ventas": 3.015
  },
  {
    "ano_quatrimistre": "2007-Q2",
    "ventas": 2.886
  },
  {
    "ano_quatrimistre": "2007-Q3",
    "ventas": 3.262
  },
  {
    "ano_quatrimistre": "2007-Q4",
    "ventas": 5.672
  },
  {
    "ano_quatrimistre": "2008-Q1",
    "ventas": 4.135
  },
  {
    "ano_quatrimistre": "2008-Q2",
    "ventas": 4.063
  },
  {
    "ano_quatrimistre": "2008-Q3",
    "ventas": 4.264
  },
  {
    "ano_quatrimistre": "2008-Q4",
    "ventas": 6.704
  },
  {
    "ano_quatrimistre": "2009-Q1",
    "ventas": 4.889
  },
  {
    "ano_quatrimistre": "2009-Q2",
    "ventas": 4.651
  },
  {
    "ano_quatrimistre": "2009-Q3",
    "ventas": 5.449
  },
  {
    "ano_quatrimistre": "2009-Q4",
    "ventas": 9.52
  },
  {
    "ano_quatrimistre": "2010-Q1",
    "ventas": 7.131
  },
  {
    "ano_quatrimistre": "2010-Q2",
    "ventas": 6.566
  },
  {
    "ano_quatrimistre": "2010-Q3",
    "ventas": 7.56
  },
  {
    "ano_quatrimistre": "2010-Q4",
    "ventas": 12.947
  },
  {
    "ano_quatrimistre": "2011-Q1",
    "ventas": 9.857
  },
  {
    "ano_quatrimistre": "2011-Q2",
    "ventas": 9.913
  },
  {
    "ano_quatrimistre": "2011-Q3",
    "ventas": 10.876
  },
  {
    "ano_quatrimistre": "2011-Q4",
    "ventas": 17.431
  },
  {
    "ano_quatrimistre": "2012-Q1",
    "ventas": 13.185
  },
  {
    "ano_quatrimistre": "2012-Q2",
    "ventas": 12.834
  },
  {
    "ano_quatrimistre": "2012-Q3",
    "ventas": 13.806
  },
  {
    "ano_quatrimistre": "2012-Q4",
    "ventas": 21.268
  },
  {
    "ano_quatrimistre": "2013-Q1",
    "ventas": 16.07
  },
  {
    "ano_quatrimistre": "2013-Q2",
    "ventas": 15.704
  },
  {
    "ano_quatrimistre": "2013-Q3",
    "ventas": 17.092
  },
  {
    "ano_quatrimistre": "2013-Q4",
    "ventas": 25.586
  },
  {
    "ano_quatrimistre": "2014-Q1",
    "ventas": 19.741
  },
  {
    "ano_quatrimistre": "2014-Q2",
    "ventas": 19.34
  },
  {
    "ano_quatrimistre": "2014-Q3",
    "ventas": 20.579
  },
  {
    "ano_quatrimistre": "2014-Q4",
    "ventas": 29.328
  },
  {
    "ano_quatrimistre": "2015-Q1",
    "ventas": 22.717
  },
  {
    "ano_quatrimistre": "2015-Q2",
    "ventas": 23.185
  },
  {
    "ano_quatrimistre": "2015-Q2",
    "ventas": 23.185
  },
  {
    "ano_quatrimistre": "2015-Q4",
    "ventas": 35.746
  },
  {
    "ano_quatrimistre": "2016-Q1",
    "ventas": 29.128
  },
  {
    "ano_quatrimistre": "2016-Q3",
    "ventas": 32.714
  },
  {
    "ano_quatrimistre": "2016-Q2",
    "ventas": 30.404
  },
  {
    "ano_quatrimistre": "2016-Q4",
    "ventas": 43.741
  },
  {
    "ano_quatrimistre": "2017-Q1",
    "ventas": 35.714
  },
  {
    "ano_quatrimistre": "2017-Q2",
    "ventas": 37.955
  },
  {
    "ano_quatrimistre": "2017-Q3",
    "ventas": 43.744
  },
  {
    "ano_quatrimistre": "2017-Q4",
    "ventas": 60.453
  },
  {
    "ano_quatrimistre": "2018-Q1",
    "ventas": 51.042
  },
  {
    "ano_quatrimistre": "2018-Q2",
    "ventas": 52.886
  },
  {
    "ano_quatrimistre": "2018-Q3",
    "ventas": 56.576
  },
  {
    "ano_quatrimistre": "2018-Q4",
    "ventas": 72.383
  },
  {
    "ano_quatrimistre": "2019-Q1",
    "ventas": 59.7
  },
  {
    "ano_quatrimistre": "2019-Q2",
    "ventas": 63.404
  },
  {
    "ano_quatrimistre": "2019-Q3",
    "ventas": 69.981
  },
  {
    "ano_quatrimistre": "2019-Q4",
    "ventas": 87.437
  },
  {
    "ano_quatrimistre": "2020-Q1",
    "ventas": 75.452
  },
  {
    "ano_quatrimistre": "2020-Q2",
    "ventas": 88.912
  },
  {
    "ano_quatrimistre": "2020-Q3",
    "ventas": 96.145
  },
  {
    "ano_quatrimistre": "2020-Q4",
    "ventas": 125.555
  },
  {
    "ano_quatrimistre": "2021-Q1",
    "ventas": 108.518
  },
  {
    "ano_quatrimistre": "2021-Q2",
    "ventas": 113.08
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

for (let y of data_amazon){
  lista1.push(y.ano_quatrimistre);
};

// console.log(lista1);

const lista2=[]

for (let w of data_amazon){
  lista2.push(w.ventas)
};
  
// console.log(lista2);

// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = lista1;


// Podemos tener varios conjuntos de datos. Comencemos con uno
const ventastotales = {
    label: "VENTAS AMAZON",
    data: lista2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(246, 213, 132, 0.3', // Color de fondo
    borderColor: 'rgba(246, 195, 74, 1)', // Color del borde  
    borderWidth: 3,// Ancho del borde
    
};

new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            ventastotales,
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

    





// Cargamos el archivo CSV

