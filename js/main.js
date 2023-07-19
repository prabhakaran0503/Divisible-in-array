var arr=[15,45,30,26,98,23,];
	document.write("The Number Of Valu="+arr)
	document.write("<br>")
for(let i=0;i<arr.length;i++)
{
	if((arr[i]%3==0)&&(arr[i]%5==0))
		
	document.write(arr[i]);
	document.write("<br>")
}