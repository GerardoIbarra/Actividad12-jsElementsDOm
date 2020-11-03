function calc(){
    let num1 =document.getElementById("primer").value;
    let num2 =document.getElementById("segundo").value;
    let num3 =document.getElementById("tercer").value;
    console.log(num1);
    let arr= [];
    arr[0]=parseFloat(num1);
    arr[1]=parseFloat(num2);
    arr[2]=parseFloat(num3);
    console.log(arr);
    let maximo = Math.max(...arr);
    
    document.getElementById("Mostrar").innerHTML=`El numero mayor es: ${parseFloat(maximo)}`;
}