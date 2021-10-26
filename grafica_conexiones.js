const datos=[
  {
    "category": 2018,
    "Total_conexiones_moviles": 18598053,
    "amazon_billones_de_dolares": 232.89,
    "llamadas": 545
  },
  {
    "category": 2019,
    "Total_conexiones_moviles": 19247205,
    "amazon_billones_de_dolares": 280.52,
    "llamadas": 613
  },
  {
    "category": 2020,
    "Total_conexiones_moviles": 20710225,
    "amazon_billones_de_dolares": 386.06,
    "llamadas": 503
  },
  {
    "category": 2021,
    "Total_conexiones_moviles": 21881359,
    "amazon_billones_de_dolares": 221.6,
    "llamadas": 325
  }
 ];
const años=[]
 
for (let y of datos){
   años.push([y.category]);
 };
 
const conexiones_moviles=[]
 
for (let y of datos){
   conexiones_moviles.push(y.Total_conexiones_moviles/100000);
 };
 
 
 

 
console.log(llamaditas);
 
 
const svg = document.getElementById("main-svg-container2");
  
const WIDTH = 500;
       
const HEIGHT = 250;
 
svg.setAttribute("width",WIDTH);
svg.setAttribute("height",HEIGHT);
 
const margins = {top:10, bottom:20, left:40,right:20};
 
const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
  

const $grafica2 = document.querySelector("#grafica2");

 // Las etiquetas son las que van en el eje X. 
const etiqueta = años;

const datos1 = {
  label: "total conexiones moviles en millones",
  data: conexiones_moviles, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(10, 162, 235, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
   
 };
 
 
new Chart($graficaconexiones, {
   type: 'bar',// Tipo de gráfica
   data: {
       labels: etiqueta,
       datasets: [datos1,datos2,datos3]
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
