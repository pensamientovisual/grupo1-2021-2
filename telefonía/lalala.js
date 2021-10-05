<<<<<<< HEAD:grupo 1/lalala.js


 const author = "Grupo bonito";
 document.getElementById("autor").innerHTML= author;


 const svg = document.getElementById("main-svg-container");
 
 const WIDTH = 400,
       HEIGHT = 300;
 
 
 svg.setAttribute("width",WIDTH)
 svg.setAttribute("height",HEIGHT)
 
 const margins = {top:10, bottom:20, left:40,right:20};
 
 
 
 const width = WIDTH-margins.left-margins.right,
       height = HEIGHT-margins.top-margins.bottom;
 

 const bubbleContainer = document.createElementNS("http://www.w3.org/2000/svg", "g");
 bubbleContainer.setAttribute("id","bubble-container");
 svg.appendChild(bubbleContainer);
 

 
 const background =document.createElementNS("http://www.w3.org/2000/svg", "rect");
 background.setAttribute("x",margins.left);
 background.setAttribute("y",margins.top);
 background.setAttribute("height",height);
 background.setAttribute("width",width);
 background.setAttribute("fill","lightgrey");
 
 bubbleContainer.appendChild(background);
 

const datos = [
 {
   "ano": 2019,
   "Mes": "Ene",
   "Total de conexiones 2G": 374.839,
   "Total de conexiones 3G": "3.319.902 ",
   "Total de conexiones 4G": "14.902.490 ",
   "Total_Conexiones_Moviles": "18.597.231 ",
   "Total de Conexiones 3G+4G": "18.222.392 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,98 ",
   "Penetraci�n 3G por cada 100 habitantes": "17,51 ",
   "Penetraci�n 4G por cada 100 habitantes": "78,60 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "96,11 ",
   "Penetraci�n Total por cada 100 habitantes": "98,09 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Feb",
   "Total de conexiones 2G": 370.554,
   "Total de conexiones 3G": "3.304.226 ",
   "Total de conexiones 4G": "14.998.081 ",
   "Total_Conexiones_Moviles": "18.672.861 ",
   "Total de Conexiones 3G+4G": "18.302.307 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,95 ",
   "Penetraci�n 3G por cada 100 habitantes": "17,40 ",
   "Penetraci�n 4G por cada 100 habitantes": "78,98 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "96,39 ",
   "Penetraci�n Total por cada 100 habitantes": "98,34 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Mar",
   "Total de conexiones 2G": 372.336,
   "Total de conexiones 3G": "3.098.535 ",
   "Total de conexiones 4G": "15.440.516 ",
   "Total_Conexiones_Moviles": "18.911.387 ",
   "Total de Conexiones 3G+4G": "18.539.051 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,96 ",
   "Penetraci�n 3G por cada 100 habitantes": "16,29 ",
   "Penetraci�n 4G por cada 100 habitantes": "81,19 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,48 ",
   "Penetraci�n Total por cada 100 habitantes": "99,44 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Abr",
   "Total de conexiones 2G": 339.814,
   "Total de conexiones 3G": "2.923.157 ",
   "Total de conexiones 4G": "15.652.763 ",
   "Total_Conexiones_Moviles": "18.915.734 ",
   "Total de Conexiones 3G+4G": "18.575.920 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,78 ",
   "Penetraci�n 3G por cada 100 habitantes": "15,35 ",
   "Penetraci�n 4G por cada 100 habitantes": "82,18 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,52 ",
   "Penetraci�n Total por cada 100 habitantes": "99,31 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "May",
   "Total de conexiones 2G": 325.821,
   "Total de conexiones 3G": "2.840.589 ",
   "Total de conexiones 4G": "15.779.633 ",
   "Total_Conexiones_Moviles": "18.946.043 ",
   "Total de Conexiones 3G+4G": "18.620.222 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,71 ",
   "Penetraci�n 3G por cada 100 habitantes": "14,89 ",
   "Penetraci�n 4G por cada 100 habitantes": "82,71 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,60 ",
   "Penetraci�n Total por cada 100 habitantes": "99,31 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Jun",
   "Total de conexiones 2G": 317.096,
   "Total de conexiones 3G": "2.739.847 ",
   "Total de conexiones 4G": "15.883.966 ",
   "Total_Conexiones_Moviles": "18.940.909 ",
   "Total de Conexiones 3G+4G": "18.623.813 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,66 ",
   "Penetraci�n 3G por cada 100 habitantes": "14,34 ",
   "Penetraci�n 4G por cada 100 habitantes": "83,13 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,47 ",
   "Penetraci�n Total por cada 100 habitantes": "99,13 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Jul",
   "Total de conexiones 2G": 307.382,
   "Total de conexiones 3G": "2.682.741 ",
   "Total de conexiones 4G": "15.899.566 ",
   "Total_Conexiones_Moviles": "18.889.689 ",
   "Total de Conexiones 3G+4G": "18.582.307 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,61 ",
   "Penetraci�n 3G por cada 100 habitantes": "14,02 ",
   "Penetraci�n 4G por cada 100 habitantes": "83,09 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,10 ",
   "Penetraci�n Total por cada 100 habitantes": "98,71 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Ago",
   "Total de conexiones 2G": 297.102,
   "Total de conexiones 3G": "2.566.192 ",
   "Total de conexiones 4G": "15.989.797 ",
   "Total_Conexiones_Moviles": "18.853.091 ",
   "Total de Conexiones 3G+4G": "18.555.989 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,55 ",
   "Penetraci�n 3G por cada 100 habitantes": "13,39 ",
   "Penetraci�n 4G por cada 100 habitantes": "83,43 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "96,82 ",
   "Penetraci�n Total por cada 100 habitantes": "98,37 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Sep",
   "Total de conexiones 2G": 291.504,
   "Total de conexiones 3G": "2.532.165 ",
   "Total de conexiones 4G": "15.931.990 ",
   "Total_Conexiones_Moviles": "18.755.659 ",
   "Total de Conexiones 3G+4G": "18.464.155 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,52 ",
   "Penetraci�n 3G por cada 100 habitantes": "13,19 ",
   "Penetraci�n 4G por cada 100 habitantes": "83,00 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "96,19 ",
   "Penetraci�n Total por cada 100 habitantes": "97,71 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Oct",
   "Total de conexiones 2G": 274.161,
   "Total de conexiones 3G": "2.468.569 ",
   "Total de conexiones 4G": "15.956.912 ",
   "Total_Conexiones_Moviles": "18.699.642 ",
   "Total de Conexiones 3G+4G": "18.425.481 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,43 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,84 ",
   "Penetraci�n 4G por cada 100 habitantes": "83,00 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "95,85 ",
   "Penetraci�n Total por cada 100 habitantes": "97,27 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Nov",
   "Total de conexiones 2G": 286.046,
   "Total de conexiones 3G": "2.462.437 ",
   "Total de conexiones 4G": "16.182.992 ",
   "Total_Conexiones_Moviles": "18.931.475 ",
   "Total de Conexiones 3G+4G": "18.645.429 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,49 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,79 ",
   "Penetraci�n 4G por cada 100 habitantes": "84,05 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "96,84 ",
   "Penetraci�n Total por cada 100 habitantes": "98,33 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2019,
   "Mes": "Dic",
   "Total de conexiones 2G": 286.123,
   "Total de conexiones 3G": "2.454.468 ",
   "Total de conexiones 4G": "16.506.614 ",
   "Total_Conexiones_Moviles": "19.247.205 ",
   "Total de Conexiones 3G+4G": "18.961.082 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,48 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,73 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,60 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "98,33 ",
   "Penetraci�n Total por cada 100 habitantes": "99,82 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Ene",
   "Total de conexiones 2G": 279.207,
   "Total de conexiones 3G": "2.386.584 ",
   "Total de conexiones 4G": "16.551.248 ",
   "Total_Conexiones_Moviles": "19.217.039 ",
   "Total de Conexiones 3G+4G": "18.937.832 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,45 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,36 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,70 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "98,06 ",
   "Penetraci�n Total por cada 100 habitantes": "99,51 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Feb",
   "Total de conexiones 2G": 269.379,
   "Total de conexiones 3G": "2.379.005 ",
   "Total de conexiones 4G": "16.484.965 ",
   "Total_Conexiones_Moviles": "19.133.349 ",
   "Total de Conexiones 3G+4G": "18.863.970 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,39 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,30 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,23 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,53 ",
   "Penetraci�n Total por cada 100 habitantes": "98,92 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Mar",
   "Total de conexiones 2G": 263.615,
   "Total de conexiones 3G": "2.346.482 ",
   "Total de conexiones 4G": "16.599.646 ",
   "Total_Conexiones_Moviles": "19.209.743 ",
   "Total de Conexiones 3G+4G": "18.946.128 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,36 ",
   "Penetraci�n 3G por cada 100 habitantes": "12,11 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,70 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,81 ",
   "Penetraci�n Total por cada 100 habitantes": "99,17 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Abr",
   "Total de conexiones 2G": 256.085,
   "Total de conexiones 3G": "2.294.426 ",
   "Total de conexiones 4G": "16.583.152 ",
   "Total_Conexiones_Moviles": "19.133.663 ",
   "Total de Conexiones 3G+4G": "18.877.578 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,32 ",
   "Penetraci�n 3G por cada 100 habitantes": "11,83 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,48 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,31 ",
   "Penetraci�n Total por cada 100 habitantes": "98,63 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "May",
   "Total de conexiones 2G": 255.032,
   "Total de conexiones 3G": "2.285.203 ",
   "Total de conexiones 4G": "16.690.116 ",
   "Total_Conexiones_Moviles": "19.230.351 ",
   "Total de Conexiones 3G+4G": "18.975.319 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,31 ",
   "Penetraci�n 3G por cada 100 habitantes": "11,76 ",
   "Penetraci�n 4G por cada 100 habitantes": "85,90 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "97,66 ",
   "Penetraci�n Total por cada 100 habitantes": "98,98 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Jun",
   "Total de conexiones 2G": 248.343,
   "Total de conexiones 3G": "2.306.720 ",
   "Total de conexiones 4G": "16.816.618 ",
   "Total_Conexiones_Moviles": "19.371.681 ",
   "Total de Conexiones 3G+4G": "19.123.338 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,28 ",
   "Penetraci�n 3G por cada 100 habitantes": "11,85 ",
   "Penetraci�n 4G por cada 100 habitantes": "86,42 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "98,28 ",
   "Penetraci�n Total por cada 100 habitantes": "99,55 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Jul",
   "Total de conexiones 2G": 238.949,
   "Total de conexiones 3G": "2.223.232 ",
   "Total de conexiones 4G": "17.081.909 ",
   "Total_Conexiones_Moviles": "19.544.090 ",
   "Total de Conexiones 3G+4G": "19.305.141 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,23 ",
   "Penetraci�n 3G por cada 100 habitantes": "11,41 ",
   "Penetraci�n 4G por cada 100 habitantes": "87,70 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "99,12 ",
   "Penetraci�n Total por cada 100 habitantes": "100,35 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Ago",
   "Total de conexiones 2G": 222.283,
   "Total de conexiones 3G": "2.157.574 ",
   "Total de conexiones 4G": "17.443.886 ",
   "Total_Conexiones_Moviles": "19.823.743 ",
   "Total de Conexiones 3G+4G": "19.601.460 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,14 ",
   "Penetraci�n 3G por cada 100 habitantes": "11,07 ",
   "Penetraci�n 4G por cada 100 habitantes": "89,48 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "100,55 ",
   "Penetraci�n Total por cada 100 habitantes": "101,69 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Sep",
   "Total de conexiones 2G": 213.434,
   "Total de conexiones 3G": "2.095.488 ",
   "Total de conexiones 4G": "17.699.455 ",
   "Total_Conexiones_Moviles": "20.008.377 ",
   "Total de Conexiones 3G+4G": "19.794.943 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,09 ",
   "Penetraci�n 3G por cada 100 habitantes": "10,74 ",
   "Penetraci�n 4G por cada 100 habitantes": "90,70 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "101,44 ",
   "Penetraci�n Total por cada 100 habitantes": "102,54 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Oct",
   "Total de conexiones 2G": 204.218,
   "Total de conexiones 3G": "2.070.677 ",
   "Total de conexiones 4G": "17.901.998 ",
   "Total_Conexiones_Moviles": "20.176.893 ",
   "Total de Conexiones 3G+4G": "19.972.675 ",
   "Penetraci�n 2G por cada 100 habitantes": "1,05 ",
   "Penetraci�n 3G por cada 100 habitantes": "10,60 ",
   "Penetraci�n 4G por cada 100 habitantes": "91,66 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "102,26 ",
   "Penetraci�n Total por cada 100 habitantes": "103,30 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Nov",
   "Total de conexiones 2G": 194.446,
   "Total de conexiones 3G": "2.037.442 ",
   "Total de conexiones 4G": "18.110.587 ",
   "Total_Conexiones_Moviles": "20.342.475 ",
   "Total de Conexiones 3G+4G": "20.148.029 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,99 ",
   "Penetraci�n 3G por cada 100 habitantes": "10,42 ",
   "Penetraci�n 4G por cada 100 habitantes": "92,64 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "103,06 ",
   "Penetraci�n Total por cada 100 habitantes": "104,05 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2020,
   "Mes": "Dic",
   "Total de conexiones 2G": 167.375,
   "Total de conexiones 3G": "1.960.755 ",
   "Total de conexiones 4G": "18.582.095 ",
   "Total_Conexiones_Moviles": "20.710.225 ",
   "Total de Conexiones 3G+4G": "20.542.850 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,86 ",
   "Penetraci�n 3G por cada 100 habitantes": "10,02 ",
   "Penetraci�n 4G por cada 100 habitantes": "94,96 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "104,98 ",
   "Penetraci�n Total por cada 100 habitantes": "105,84 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "Ene",
   "Total de conexiones 2G": 167.922,
   "Total de conexiones 3G": "1.913.465 ",
   "Total de conexiones 4G": "18.502.205 ",
   "Total_Conexiones_Moviles": "20.583.592 ",
   "Total de Conexiones 3G+4G": "20.415.670 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,86 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,77 ",
   "Penetraci�n 4G por cada 100 habitantes": "94,46 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "104,23 ",
   "Penetraci�n Total por cada 100 habitantes": "105,09 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "Feb",
   "Total de conexiones 2G": 167.846,
   "Total de conexiones 3G": "1.920.036 ",
   "Total de conexiones 4G": "18.665.829 ",
   "Total_Conexiones_Moviles": "20.753.711 ",
   "Total de Conexiones 3G+4G": "20.585.865 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,86 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,79 ",
   "Penetraci�n 4G por cada 100 habitantes": "95,21 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "105,00 ",
   "Penetraci�n Total por cada 100 habitantes": "105,86 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "Mar",
   "Total de conexiones 2G": 174.745,
   "Total de conexiones 3G": "1.953.467 ",
   "Total de conexiones 4G": "19.213.129 ",
   "Total_Conexiones_Moviles": "21.341.341 ",
   "Total de Conexiones 3G+4G": "21.166.596 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,89 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,95 ",
   "Penetraci�n 4G por cada 100 habitantes": "97,91 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "107,86 ",
   "Penetraci�n Total por cada 100 habitantes": "108,75 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "Abr",
   "Total de conexiones 2G": 171.145,
   "Total de conexiones 3G": "1.868.077 ",
   "Total de conexiones 4G": "19.323.248 ",
   "Total_Conexiones_Moviles": "21.362.470 ",
   "Total de Conexiones 3G+4G": "21.191.325 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,87 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,51 ",
   "Penetraci�n 4G por cada 100 habitantes": "98,38 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "107,89 ",
   "Penetraci�n Total por cada 100 habitantes": "108,76 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "May",
   "Total de conexiones 2G": 169.779,
   "Total de conexiones 3G": "1.860.142 ",
   "Total de conexiones 4G": "19.675.923 ",
   "Total_Conexiones_Moviles": "21.705.844 ",
   "Total de Conexiones 3G+4G": "21.536.065 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,86 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,46 ",
   "Penetraci�n 4G por cada 100 habitantes": "100,08 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "109,54 ",
   "Penetraci�n Total por cada 100 habitantes": "110,41 ",
   "FIELD13": "",
   "FIELD14": ""
 },
 {
   "ano": 2021,
   "Mes": "Jun",
   "Total de conexiones 2G": 158.967,
   "Total de conexiones 3G": "1.827.629 ",
   "Total de conexiones 4G": "19.894.763 ",
   "Total_Conexiones_Moviles": "21.881.359 ",
   "Total de Conexiones 3G+4G": "21.722.392 ",
   "Penetraci�n 2G por cada 100 habitantes": "0,81 ",
   "Penetraci�n 3G por cada 100 habitantes": "9,29 ",
   "Penetraci�n 4G por cada 100 habitantes": "101,10 ",
   "Penetraci�n 3G+4G por cada 100 habitantes": "110,39 ",
   "Penetraci�n Total por cada 100 habitantes": "111,20 ",
   "FIELD13": "",
   "FIELD14": ""
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
    //console.log(w);
    
    const xValue=w.Mes[xVariable],
          aValue=w.ano[aVariable],
          yValue=w.Total_Conexiones_Moviles[yVariable];
    
    };


// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Ventas por mes",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};


new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

    
