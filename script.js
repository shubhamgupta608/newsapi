function myfun()
{
 fetch("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
     .then(data =>{
      for(let i=0;i<10;i++)
       {
         document.getElementById("headline"+i).innerHTML=data.articles[i].title;
          document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src=data.articles[i].urlToImage;
         document.getElementById("de"+i).innerHTML=data.articles[i].description;
       }
     })
 .catch((err)=> {console.error(err);})
}
//different channels
 var m= document.getElementsByClassName('ft');
 var z=m.length;
 for(let i=0;i<z;i++){
   m[i].addEventListener("click",function(){
     channels(this.id);
   });
 }
function channels(channelname)
{
  fetch(`https://newsapi.org/v2/top-headlines?sources=${channelname}&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
  .then(data => data.json())
       .then(data =>{
         for(let i=0;i<10;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
       document.getElementById('image'+i).src =data.articles[i].urlToImage;
      document.getElementById("de"+i).innerHTML=data.articles[i].description;
    }})
  .catch((err)=> {console.error(err);})
}
//filter
function sorting()
{

let x=document.getElementById("input").value;
 var search=[];
 for(let k=0;k<8;k++)
 {
   if(document.getElementById("ch"+k).checked)
   { let v1=document.getElementById("ch"+k).value;
     search.push(v1);
   }
 }
 if(x.length>0)
 {
 if(search.length >0)
 {
   fetch(`https://newsapi.org/v2/everything?q=${x}&sources=${search}&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
    .then(data => data.json())
       .then(data =>{
         if(data.articles == "")
         {
              alert("News Not Available in "+search);
         }
         else{
        for(let i=0;i<10;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src =data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;}
         }})
}
else
  {
    alert("Please Select Atleast One Channel");
  }
}
else
  {
    alert("Please Enter any KeyWord to Search");
  }
}
