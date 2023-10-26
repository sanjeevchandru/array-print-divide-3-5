//How many numbers are divisible by 3 and 5 in given array

document.write("How many numbers are divisible by 3 and 5 in given array"+"<br>");
document.write("--------------------------------------------------------"+"<br><br>");

var a=[3,9,10,12,345,98,120,45,15,30];

document.write("The array elements are:"+a+"<br>");
document.write("The count of array elements:"+a.length+"<br><br>");
document.write("Below the array elements are divisible by 3 and 5"+"<br>")
for(let i=0;i<a.length;i++){
    if((a[i]%3==0) &&(a[i]%5==0)){
        document.write(a[i]+"<br>");
    }
}