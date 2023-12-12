function OnClickButton() {
var a_arr;
var arr= new Array ();
var max_v;
var min_v;
//var Chet_mas=new Array();
//var nchet_mas=new Array();
var i_arr=prompt("Укажите из скольки чисел будет состоять массив","1"); 
a_arr=Number(i_arr);
if (a_arr<0 || isNaN(a_arr)) {alert("Вы ввели отриц число либо нечисловой символ");}
    else {for (var i=0;i<a_arr;i++) {arr[i]=Number(prompt('Укажите ' +String(i+1)+' значение массива'))};}

for (i=0;i<a_arr;i++) {if (Math.round(arr[i]/2)==arr[i]/2) 
    {console.log("Это четный элемент массива ="+arr[i]);}
    else {console.log("Это нечетный элемент массива ="+arr[i]);}
    ;}
  //for (i=0;i<a_arr;i++) {
    max_v=arr[0];
    for ( i=1;i<a_arr;i++) {if (max_v>arr[i] || max_v==arr[i])
                                                   {max_v=max_v;}
                                                    else {max_v=arr[i];};}
    min_v=arr[0];
    for ( i=1;i<a_arr;i++) {if (min_v<arr[i] || min_v==arr[i])
    {min_v=min_v;}
    else {min_v=arr[i];};}
   console.log("Наибольшая величина массива =" +max_v, " Наименьшая величина массива ="+min_v);
  }
  


//function Podchet() {

//console.log(i, typeof i);


