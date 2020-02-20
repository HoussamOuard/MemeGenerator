var left=document.getElementById("left");
var right=document.getElementById("right");
var image=document.getElementById("images");
var picIndex=1;

left.addEventListener("click",changePicToLeft);
right.addEventListener("click",changePicToright);

function affichePic(i)
{
  if(i==1)image.style.backgroundImage="url('images/book1.jpg')";
  if(i==2)image.style.backgroundImage="url('images/book2.jpg')";
  if(i==3)image.style.backgroundImage="url('images/book3.jpg')";
  
  
}

function changePicToLeft()
{   picIndex--;
   if(picIndex<1)
   { 
      picIndex=3;
      affichePic(picIndex);
   }else if(picIndex>3)
   {
       picIndex=1;
       affichePic(picIndex);
   }
   else
   {
    affichePic(picIndex);
   }
}

function changePicToright()
{
    picIndex++;
    if(picIndex<1)
    {
       picIndex=3;
       affichePic(picIndex);
    }else if(picIndex>3)
    {
        picIndex=1;
        affichePic(picIndex);
    }
    else
    {
     affichePic(picIndex);
    }

}