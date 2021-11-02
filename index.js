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
 
const llamaditas=[]
 
for (let y of datos){
   llamaditas.push(y.llamadas);
 };

const conexiones_moviles=[]
 
for (let y of datos){
   conexiones_moviles.push(y.Total_conexiones_moviles/100000);
 };

const amazon=[]
 
for (let y of datos){
   amazon.push((y.amazon_billones_de_dolares));
 };
 

// const svg = document.getElementById("main-svg-container1");
  
// const WIDTH = 500;
       
// const HEIGHT = 250;
 
// svg.setAttribute("width",WIDTH);
// svg.setAttribute("height",HEIGHT);
 
// const margins = {top:10, bottom:20, left:40,right:20};
 
// const width = WIDTH-margins.left-margins.right,
//        height = HEIGHT-margins.top-margins.bottom;
  

// const $grafica1 = document.querySelector("#grafica1");




 // Las etiquetas son las que van en el eje X. 
const etiqueta = años;

const datos1 = {
  label: "Llamadas",
  data: llamaditas, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(54, 162, 22, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
  hoverBorderColor: 'green',
  
};

const datos2 = {
  label: "conexiones_moviles",
  data: conexiones_moviles, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(54, 162, 22, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
  hoverBorderColor: 'green',
  
};

const datos3 = {
  label: "Amazon",
  data: amazon, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: 'rgba(54, 162, 22, 0.2)', // Color de fondo
  borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
  borderWidth: 3,// Ancho del borde
  hoverBorderColor: 'green',
  
};
 
const config1 = {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: etiqueta,
      datasets: [datos1]
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
  }}

const config2 = {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: etiqueta,
      datasets: [datos2]
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
  }};

  const config3 = {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiqueta,
        datasets: [datos3]
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
    }};
    
  
  




  const g1 = new Chart(
    document.getElementById('g1'),
    config1
  );   

  const g2 = new Chart(
    document.getElementById('g2'),
    config2
  );    
const g3 = new Chart(
    document.getElementById('g3'),
    config3
  );

 

function triggerHover(chart, index) {
    if (chart.getActiveElements().length > 0) {
      chart.setActiveElements([]);
    } else {
      chart.setActiveElements([
        {
          datasetIndex: 0,
          index: index,
        }
      ]);
    }
    chart.update();
  }

  function triggerTooltip(chart, index) {
    const tooltip = chart.tooltip;
    if (tooltip.getActiveElements().length > 0) {
      tooltip.setActiveElements([], {x: 0, y: 0});
    } else {
      const chartArea = chart.chartArea;
      tooltip.setActiveElements([
        {
          datasetIndex: 0,
          index: index,
        }
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      });
    }
  
    chart.update();
  }

  // function owo(chart){
  //   console.log(chart)
  //   console.log("asdasdasdas")
  // }

  const b1 = document.getElementById('2018');
  const b2 = document.getElementById('2019');
  const b3 = document.getElementById('2020');
  const b4 = document.getElementById('2021');

  b1.onclick =  function(){
    triggerHover(g1, 0);
    triggerTooltip(g1, 0);
    triggerHover(g2, 0);
    triggerTooltip(g2, 0);
    triggerHover(g3, 0);
    triggerTooltip(g3, 0);
  }
  b2.onclick =  function(){
    triggerHover(g1, 1);
    triggerTooltip(g1, 1);
    triggerHover(g2, 1);
    triggerTooltip(g2, 1);
    triggerHover(g3, 1);
    triggerTooltip(g3, 1);
  }
  b3.onclick =  function(){
    triggerHover(g1, 2);
    triggerTooltip(g1, 2);
    triggerHover(g2, 2);
    triggerTooltip(g2, 2);
    triggerHover(g3, 2);
    triggerTooltip(g3, 2);
  }
  b4.onclick =  function(){
    triggerHover(g1, 3);
    triggerTooltip(g1, 3);
    triggerHover(g2, 3);
    triggerTooltip(g2, 3);
    triggerHover(g3, 3);
    triggerTooltip(g3, 3);
  }
