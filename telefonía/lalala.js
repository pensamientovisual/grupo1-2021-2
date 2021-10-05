

 //const author = "Grupo bonito";
 //document.getElementById("autor").innerHTML= author;


 const svg = document.getElementById("main-svg-container");
 
 const WIDTH = 100,
       HEIGHT = 100;
 
 
 svg.setAttribute("width",WIDTH)
 svg.setAttribute("height",HEIGHT)
 
 const margins = {top:10, bottom:20, left:40,right:20};
 
 
 
 const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 

//  const bubbleContainer = document.createElementNS("http://www.w3.org/2000/svg", "g");
//  bubbleContainer.setAttribute("id","bubble-container");
//  svg.appendChild(bubbleContainer);
 

 
//  const background =document.createElementNS("http://www.w3.org/2000/svg", "rect");
//  background.setAttribute("x",margins.left);
//  background.setAttribute("y",margins.top);
//  background.setAttribute("height",height);
//  background.setAttribute("width",width);
//  background.setAttribute("fill","lightgrey");
 
//  bubbleContainer.appendChild(background);
 

const datos = [
  {
    "ano": 2019,
    "Mes": "Ene",
    "Total de conexiones 2G": 374.839,
    "Total de conexiones 3G": 3319902,
    "Total de conexiones 4G": 14902490,
    "Total_Conexiones_Moviles": 18597231,
    "Total de Conexiones 3G+4G": 18222392,
    "Penetración 2G por cada 100 habitantes": "1,98",
    "Penetración 3G por cada 100 habitantes": "17,51",
    "Penetración 4G por cada 100 habitantes": "78,6",
    "Penetración 3G+4G por cada 100 habitantes": "96,11",
    "Penetración Total por cada 100 habitantes": "98,09"
  },
  {
    "ano": 2019,
    "Mes": "Feb",
    "Total de conexiones 2G": 370.554,
    "Total de conexiones 3G": 3304226,
    "Total de conexiones 4G": 14998081,
    "Total_Conexiones_Moviles": 18672861,
    "Total de Conexiones 3G+4G": 18302307,
    "Penetración 2G por cada 100 habitantes": "1,95",
    "Penetración 3G por cada 100 habitantes": "17,4",
    "Penetración 4G por cada 100 habitantes": "78,98",
    "Penetración 3G+4G por cada 100 habitantes": "96,39",
    "Penetración Total por cada 100 habitantes": "98,34"
  },
  {
    "ano": 2019,
    "Mes": "Mar",
    "Total de conexiones 2G": 372.336,
    "Total de conexiones 3G": 3098535,
    "Total de conexiones 4G": 15440516,
    "Total_Conexiones_Moviles": 18911387,
    "Total de Conexiones 3G+4G": 18539051,
    "Penetración 2G por cada 100 habitantes": "1,96",
    "Penetración 3G por cada 100 habitantes": "16,29",
    "Penetración 4G por cada 100 habitantes": "81,19",
    "Penetración 3G+4G por cada 100 habitantes": "97,48",
    "Penetración Total por cada 100 habitantes": "99,44"
  },
  {
    "ano": 2019,
    "Mes": "Abr",
    "Total de conexiones 2G": 339.814,
    "Total de conexiones 3G": 2923157,
    "Total de conexiones 4G": 15652763,
    "Total_Conexiones_Moviles": 18915734,
    "Total de Conexiones 3G+4G": 18575920,
    "Penetración 2G por cada 100 habitantes": "1,78",
    "Penetración 3G por cada 100 habitantes": "15,35",
    "Penetración 4G por cada 100 habitantes": "82,18",
    "Penetración 3G+4G por cada 100 habitantes": "97,52",
    "Penetración Total por cada 100 habitantes": "99,31"
  },
  {
    "ano": 2019,
    "Mes": "May",
    "Total de conexiones 2G": 325.821,
    "Total de conexiones 3G": 2840589,
    "Total de conexiones 4G": 15779633,
    "Total_Conexiones_Moviles": 18946043,
    "Total de Conexiones 3G+4G": 18620222,
    "Penetración 2G por cada 100 habitantes": "1,71",
    "Penetración 3G por cada 100 habitantes": "14,89",
    "Penetración 4G por cada 100 habitantes": "82,71",
    "Penetración 3G+4G por cada 100 habitantes": "97,6",
    "Penetración Total por cada 100 habitantes": "99,31"
  },
  {
    "ano": 2019,
    "Mes": "Jun",
    "Total de conexiones 2G": 317.096,
    "Total de conexiones 3G": 2739847,
    "Total de conexiones 4G": 15883966,
    "Total_Conexiones_Moviles": 18940909,
    "Total de Conexiones 3G+4G": 18623813,
    "Penetración 2G por cada 100 habitantes": "1,66",
    "Penetración 3G por cada 100 habitantes": "14,34",
    "Penetración 4G por cada 100 habitantes": "83,13",
    "Penetración 3G+4G por cada 100 habitantes": "97,47",
    "Penetración Total por cada 100 habitantes": "99,13"
  },
  {
    "ano": 2019,
    "Mes": "Jul",
    "Total de conexiones 2G": 307.382,
    "Total de conexiones 3G": 2682741,
    "Total de conexiones 4G": 15899566,
    "Total_Conexiones_Moviles": 18889689,
    "Total de Conexiones 3G+4G": 18582307,
    "Penetración 2G por cada 100 habitantes": "1,61",
    "Penetración 3G por cada 100 habitantes": "14,02",
    "Penetración 4G por cada 100 habitantes": "83,09",
    "Penetración 3G+4G por cada 100 habitantes": "97,1",
    "Penetración Total por cada 100 habitantes": "98,71"
  },
  {
    "ano": 2019,
    "Mes": "Ago",
    "Total de conexiones 2G": 297.102,
    "Total de conexiones 3G": 2566192,
    "Total de conexiones 4G": 15989797,
    "Total_Conexiones_Moviles": 18853091,
    "Total de Conexiones 3G+4G": 18555989,
    "Penetración 2G por cada 100 habitantes": "1,55",
    "Penetración 3G por cada 100 habitantes": "13,39",
    "Penetración 4G por cada 100 habitantes": "83,43",
    "Penetración 3G+4G por cada 100 habitantes": "96,82",
    "Penetración Total por cada 100 habitantes": "98,37"
  },
  {
    "ano": 2019,
    "Mes": "Sep",
    "Total de conexiones 2G": 291.504,
    "Total de conexiones 3G": 2532165,
    "Total de conexiones 4G": 15931990,
    "Total_Conexiones_Moviles": 18755659,
    "Total de Conexiones 3G+4G": 18464155,
    "Penetración 2G por cada 100 habitantes": "1,52",
    "Penetración 3G por cada 100 habitantes": "13,19",
    "Penetración 4G por cada 100 habitantes": "83",
    "Penetración 3G+4G por cada 100 habitantes": "96,19",
    "Penetración Total por cada 100 habitantes": "97,71"
  },
  {
    "ano": 2019,
    "Mes": "Oct",
    "Total de conexiones 2G": 274.161,
    "Total de conexiones 3G": 2468569,
    "Total de conexiones 4G": 15956912,
    "Total_Conexiones_Moviles": 18699642,
    "Total de Conexiones 3G+4G": 18425481,
    "Penetración 2G por cada 100 habitantes": "1,43",
    "Penetración 3G por cada 100 habitantes": "12,84",
    "Penetración 4G por cada 100 habitantes": "83",
    "Penetración 3G+4G por cada 100 habitantes": "95,85",
    "Penetración Total por cada 100 habitantes": "97,27"
  },
  {
    "ano": 2019,
    "Mes": "Nov",
    "Total de conexiones 2G": 286.046,
    "Total de conexiones 3G": 2462437,
    "Total de conexiones 4G": 16182992,
    "Total_Conexiones_Moviles": 18931475,
    "Total de Conexiones 3G+4G": 18645429,
    "Penetración 2G por cada 100 habitantes": "1,49",
    "Penetración 3G por cada 100 habitantes": "12,79",
    "Penetración 4G por cada 100 habitantes": "84,05",
    "Penetración 3G+4G por cada 100 habitantes": "96,84",
    "Penetración Total por cada 100 habitantes": "98,33"
  },
  {
    "ano": 2019,
    "Mes": "Dic",
    "Total de conexiones 2G": 286.123,
    "Total de conexiones 3G": 2454468,
    "Total de conexiones 4G": 16506614,
    "Total_Conexiones_Moviles": 19247205,
    "Total de Conexiones 3G+4G": 18961082,
    "Penetración 2G por cada 100 habitantes": "1,48",
    "Penetración 3G por cada 100 habitantes": "12,73",
    "Penetración 4G por cada 100 habitantes": "85,6",
    "Penetración 3G+4G por cada 100 habitantes": "98,33",
    "Penetración Total por cada 100 habitantes": "99,82"
  },
  {
    "ano": 2020,
    "Mes": "Ene",
    "Total de conexiones 2G": 279.207,
    "Total de conexiones 3G": 2386584,
    "Total de conexiones 4G": 16551248,
    "Total_Conexiones_Moviles": 19217039,
    "Total de Conexiones 3G+4G": 18937832,
    "Penetración 2G por cada 100 habitantes": "1,45",
    "Penetración 3G por cada 100 habitantes": "12,36",
    "Penetración 4G por cada 100 habitantes": "85,7",
    "Penetración 3G+4G por cada 100 habitantes": "98,06",
    "Penetración Total por cada 100 habitantes": "99,51"
  },
  {
    "ano": 2020,
    "Mes": "Feb",
    "Total de conexiones 2G": 269.379,
    "Total de conexiones 3G": 2379005,
    "Total de conexiones 4G": 16484965,
    "Total_Conexiones_Moviles": 19133349,
    "Total de Conexiones 3G+4G": 18863970,
    "Penetración 2G por cada 100 habitantes": "1,39",
    "Penetración 3G por cada 100 habitantes": "12,3",
    "Penetración 4G por cada 100 habitantes": "85,23",
    "Penetración 3G+4G por cada 100 habitantes": "97,53",
    "Penetración Total por cada 100 habitantes": "98,92"
  },
  {
    "ano": 2020,
    "Mes": "Mar",
    "Total de conexiones 2G": 263.615,
    "Total de conexiones 3G": 2346482,
    "Total de conexiones 4G": 16599646,
    "Total_Conexiones_Moviles": 19209743,
    "Total de Conexiones 3G+4G": 18946128,
    "Penetración 2G por cada 100 habitantes": "1,36",
    "Penetración 3G por cada 100 habitantes": "12,11",
    "Penetración 4G por cada 100 habitantes": "85,7",
    "Penetración 3G+4G por cada 100 habitantes": "97,81",
    "Penetración Total por cada 100 habitantes": "99,17"
  },
  {
    "ano": 2020,
    "Mes": "Abr",
    "Total de conexiones 2G": 256.085,
    "Total de conexiones 3G": 2294426,
    "Total de conexiones 4G": 16583152,
    "Total_Conexiones_Moviles": 19133663,
    "Total de Conexiones 3G+4G": 18877578,
    "Penetración 2G por cada 100 habitantes": "1,32",
    "Penetración 3G por cada 100 habitantes": "11,83",
    "Penetración 4G por cada 100 habitantes": "85,48",
    "Penetración 3G+4G por cada 100 habitantes": "97,31",
    "Penetración Total por cada 100 habitantes": "98,63"
  },
  {
    "ano": 2020,
    "Mes": "May",
    "Total de conexiones 2G": 255.032,
    "Total de conexiones 3G": 2285203,
    "Total de conexiones 4G": 16690116,
    "Total_Conexiones_Moviles": 19230351,
    "Total de Conexiones 3G+4G": 18975319,
    "Penetración 2G por cada 100 habitantes": "1,31",
    "Penetración 3G por cada 100 habitantes": "11,76",
    "Penetración 4G por cada 100 habitantes": "85,9",
    "Penetración 3G+4G por cada 100 habitantes": "97,66",
    "Penetración Total por cada 100 habitantes": "98,98"
  },
  {
    "ano": 2020,
    "Mes": "Jun",
    "Total de conexiones 2G": 248.343,
    "Total de conexiones 3G": 2306720,
    "Total de conexiones 4G": 16816618,
    "Total_Conexiones_Moviles": 19371681,
    "Total de Conexiones 3G+4G": 19123338,
    "Penetración 2G por cada 100 habitantes": "1,28",
    "Penetración 3G por cada 100 habitantes": "11,85",
    "Penetración 4G por cada 100 habitantes": "86,42",
    "Penetración 3G+4G por cada 100 habitantes": "98,28",
    "Penetración Total por cada 100 habitantes": "99,55"
  },
  {
    "ano": 2020,
    "Mes": "Jul",
    "Total de conexiones 2G": 238.949,
    "Total de conexiones 3G": 2223232,
    "Total de conexiones 4G": 17081909,
    "Total_Conexiones_Moviles": 19544090,
    "Total de Conexiones 3G+4G": 19305141,
    "Penetración 2G por cada 100 habitantes": "1,23",
    "Penetración 3G por cada 100 habitantes": "11,41",
    "Penetración 4G por cada 100 habitantes": "87,7",
    "Penetración 3G+4G por cada 100 habitantes": "99,12",
    "Penetración Total por cada 100 habitantes": "100,35"
  },
  {
    "ano": 2020,
    "Mes": "Ago",
    "Total de conexiones 2G": 222.283,
    "Total de conexiones 3G": 2157574,
    "Total de conexiones 4G": 17443886,
    "Total_Conexiones_Moviles": 19823743,
    "Total de Conexiones 3G+4G": 19601460,
    "Penetración 2G por cada 100 habitantes": "1,14",
    "Penetración 3G por cada 100 habitantes": "11,07",
    "Penetración 4G por cada 100 habitantes": "89,48",
    "Penetración 3G+4G por cada 100 habitantes": "100,55",
    "Penetración Total por cada 100 habitantes": "101,69"
  },
  {
    "ano": 2020,
    "Mes": "Sep",
    "Total de conexiones 2G": 213.434,
    "Total de conexiones 3G": 2095488,
    "Total de conexiones 4G": 17699455,
    "Total_Conexiones_Moviles": 20008377,
    "Total de Conexiones 3G+4G": 19794943,
    "Penetración 2G por cada 100 habitantes": "1,09",
    "Penetración 3G por cada 100 habitantes": "10,74",
    "Penetración 4G por cada 100 habitantes": "90,7",
    "Penetración 3G+4G por cada 100 habitantes": "101,44",
    "Penetración Total por cada 100 habitantes": "102,54"
  },
  {
    "ano": 2020,
    "Mes": "Oct",
    "Total de conexiones 2G": 204.218,
    "Total de conexiones 3G": 2070677,
    "Total de conexiones 4G": 17901998,
    "Total_Conexiones_Moviles": 20176893,
    "Total de Conexiones 3G+4G": 19972675,
    "Penetración 2G por cada 100 habitantes": "1,05",
    "Penetración 3G por cada 100 habitantes": "10,6",
    "Penetración 4G por cada 100 habitantes": "91,66",
    "Penetración 3G+4G por cada 100 habitantes": "102,26",
    "Penetración Total por cada 100 habitantes": "103,3"
  },
  {
    "ano": 2020,
    "Mes": "Nov",
    "Total de conexiones 2G": 194.446,
    "Total de conexiones 3G": 2037442,
    "Total de conexiones 4G": 18110587,
    "Total_Conexiones_Moviles": 20342475,
    "Total de Conexiones 3G+4G": 20148029,
    "Penetración 2G por cada 100 habitantes": "0,99",
    "Penetración 3G por cada 100 habitantes": "10,42",
    "Penetración 4G por cada 100 habitantes": "92,64",
    "Penetración 3G+4G por cada 100 habitantes": "103,06",
    "Penetración Total por cada 100 habitantes": "104,05"
  },
  {
    "ano": 2020,
    "Mes": "Dic",
    "Total de conexiones 2G": 167.375,
    "Total de conexiones 3G": 1960755,
    "Total de conexiones 4G": 18582095,
    "Total_Conexiones_Moviles": 20710225,
    "Total de Conexiones 3G+4G": 20542850,
    "Penetración 2G por cada 100 habitantes": "0,86",
    "Penetración 3G por cada 100 habitantes": "10,02",
    "Penetración 4G por cada 100 habitantes": "94,96",
    "Penetración 3G+4G por cada 100 habitantes": "104,98",
    "Penetración Total por cada 100 habitantes": "105,84"
  },
  {
    "ano": 2021,
    "Mes": "Ene",
    "Total de conexiones 2G": 167.922,
    "Total de conexiones 3G": 1913465,
    "Total de conexiones 4G": 18502205,
    "Total_Conexiones_Moviles": 20583592,
    "Total de Conexiones 3G+4G": 20415670,
    "Penetración 2G por cada 100 habitantes": "0,86",
    "Penetración 3G por cada 100 habitantes": "9,77",
    "Penetración 4G por cada 100 habitantes": "94,46",
    "Penetración 3G+4G por cada 100 habitantes": "104,23",
    "Penetración Total por cada 100 habitantes": "105,09"
  },
  {
    "ano": 2021,
    "Mes": "Feb",
    "Total de conexiones 2G": 167.846,
    "Total de conexiones 3G": 1920036,
    "Total de conexiones 4G": 18665829,
    "Total_Conexiones_Moviles": 20753711,
    "Total de Conexiones 3G+4G": 20585865,
    "Penetración 2G por cada 100 habitantes": "0,86",
    "Penetración 3G por cada 100 habitantes": "9,79",
    "Penetración 4G por cada 100 habitantes": "95,21",
    "Penetración 3G+4G por cada 100 habitantes": "105",
    "Penetración Total por cada 100 habitantes": "105,86"
  },
  {
    "ano": 2021,
    "Mes": "Mar",
    "Total de conexiones 2G": 174.745,
    "Total de conexiones 3G": 1953467,
    "Total de conexiones 4G": 19213129,
    "Total_Conexiones_Moviles": 21341341,
    "Total de Conexiones 3G+4G": 21166596,
    "Penetración 2G por cada 100 habitantes": "0,89",
    "Penetración 3G por cada 100 habitantes": "9,95",
    "Penetración 4G por cada 100 habitantes": "97,91",
    "Penetración 3G+4G por cada 100 habitantes": "107,86",
    "Penetración Total por cada 100 habitantes": "108,75"
  },
  {
    "ano": 2021,
    "Mes": "Abr",
    "Total de conexiones 2G": 171.145,
    "Total de conexiones 3G": 1868077,
    "Total de conexiones 4G": 19323248,
    "Total_Conexiones_Moviles": 21362470,
    "Total de Conexiones 3G+4G": 21191325,
    "Penetración 2G por cada 100 habitantes": "0,87",
    "Penetración 3G por cada 100 habitantes": "9,51",
    "Penetración 4G por cada 100 habitantes": "98,38",
    "Penetración 3G+4G por cada 100 habitantes": "107,89",
    "Penetración Total por cada 100 habitantes": "108,76"
  },
  {
    "ano": 2021,
    "Mes": "May",
    "Total de conexiones 2G": 169.779,
    "Total de conexiones 3G": 1860142,
    "Total de conexiones 4G": 19675923,
    "Total_Conexiones_Moviles": 21705844,
    "Total de Conexiones 3G+4G": 21536065,
    "Penetración 2G por cada 100 habitantes": "0,86",
    "Penetración 3G por cada 100 habitantes": "9,46",
    "Penetración 4G por cada 100 habitantes": "100,08",
    "Penetración 3G+4G por cada 100 habitantes": "109,54",
    "Penetración Total por cada 100 habitantes": "110,41"
  },
  {
    "ano": 2021,
    "Mes": "Jun",
    "Total de conexiones 2G": 158.967,
    "Total de conexiones 3G": 1827629,
    "Total de conexiones 4G": 19894763,
    "Total_Conexiones_Moviles": 21881359,
    "Total de Conexiones 3G+4G": 21722392,
    "Penetración 2G por cada 100 habitantes": "0,81",
    "Penetración 3G por cada 100 habitantes": "9,29",
    "Penetración 4G por cada 100 habitantes": "101,1",
    "Penetración 3G+4G por cada 100 habitantes": "110,39",
    "Penetración Total por cada 100 habitantes": "111,2"
  }
 ]



const xVariable = "mes",
      aVariable = "año",
      yVariable = "Total de Conexiones";



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


// w es el el grupo de cada dato, mes año y total de conexiones
for (const w of datos){
    // Rellenar
    console.log(w);
    
    const xValue=w.Mes[xVariable],
          aValue=w.ano[aVariable],
          yValue=w.Total_Conexiones_Moviles[yVariable];
    
    };

const lista1=[]

for (let y of datos){
  lista1.push([y.Mes,y.ano]);
};

console.log(lista1);

const lista2=[]

for (let y of datos){
  lista2.push(parseInt(y.Total_Conexiones_Moviles));
};

console.log(lista2);







// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = lista1;




// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosjeje = {
    label: "Total Conexiones Moviles",
    data: lista2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 3,// Ancho del borde
};


new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosjeje,
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

    
