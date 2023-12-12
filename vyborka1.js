function OnClickButton() {
    var a_arr;
    var arr= new Array ();
    var i_arr=prompt("Укажите из скольки чисел будет состоять массив","1"); 
    a_arr=Number(i_arr);
    var arr=new Array;
    if (a_arr<0 || isNaN(a_arr)) {alert("Вы ввели отриц число либо нечисловой символ");}
        else {for (var i=0;i<a_arr;i++) {arr[i]=Number(prompt('Укажите ' +String(i+1)+' значение массива'))};}
    for (i=0;i<a_arr;i++) { 
        arr[i]=a_arr;   
        console.log(arr[i]);
      };
    //}
      
    
    
    //function Podchet() {
    
    //console.log(i, typeof i);
    
    
    