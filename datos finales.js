datos=[
 {
   "category": 2013,
   "Total_conexiones_moviles": "9.810.982",
   "amazon_billones_de_dolares": 74.45,
   "llamadas": 299
 },
 {
   "category": 2014,
   "Total_conexiones_moviles": "10.900.147",
   "amazon_billones_de_dolares": 88.99,
   "llamadas": 365
 },
 {
   "category": 2015,
   "Total_conexiones_moviles": "11.554.069",
   "amazon_billones_de_dolares": 104.83,
   "llamadas": 374
 },
 {
   "category": 2016,
   "Total_conexiones_moviles": "13,945,254",
   "amazon_billones_de_dolares": 135.99,
   "llamadas": 407
 },
 {
   "category": 2017,
   "Total_conexiones_moviles": "16,691,468",
   "amazon_billones_de_dolares": 177.87,
   "llamadas": 489
 },
 {
   "category": 2018,
   "Total_conexiones_moviles": "18.598.053",
   "amazon_billones_de_dolares": 232.89,
   "llamadas": 545
 },
 {
   "category": 2019,
   "Total_conexiones_moviles": "19.247.205",
   "amazon_billones_de_dolares": 280.52,
   "llamadas": 613
 },
 {
   "category": 2020,
   "Total_conexiones_moviles": "20.710.225",
   "amazon_billones_de_dolares": 386.06,
   "llamadas": 503
 },
 {
   "category": 2021,
   "Total_conexiones_moviles": "21.881.359",
   "amazon_billones_de_dolares": 221.6,
   "llamadas": 325
 }
]


const svg = document.getElementById("main-svg-container3");
 
const WIDTH = 800
      
const HEIGHT = 500

svg.setAttribute("width",WIDTH);
svg.setAttribute("height",HEIGHT);

const margins = {top:10, bottom:20, left:40,right:20};

const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 

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

const años=[]

for (let y of datos){
  lista1.push([y.category]);
};



const conexiones_moviles=[]

for (let y of datos){
  lista1.push([y.Total_conexiones_moviles]);
};

console.log(conexiones_moviles);

const amazon=[]

for (let y of datos){
  lista2.push(y.amazon_billones_de_dolares);
};

console.log(amazon);

const llamaditas=[]

for (let y of datos){
  lista2.push(y.llamadas);
};

console.log(llamadas)



const datosjeje = {
  label: "Total Conexiones Moviles",
  data: lista2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
  
};


new Chart($grafica2, {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: años,
      datasets: [conexiones_moviles,amazon,llamaditas
          
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
