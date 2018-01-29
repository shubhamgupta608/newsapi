function myfun()
{
 fetch("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
     .then(data =>{
      for(var i=0;i<data.articles.length;i++)
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
function BBCNews()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
       document.getElementById('image'+i).src =data.articles[i].urlToImage;
      document.getElementById("de"+i).innerHTML=data.articles[i].description;
    }})
  .catch((err)=> {console.error(err);})
}
function BBCSports()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src =data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
function ABC()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src =data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
function ESPN()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src=data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
function BusinessInsider()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src =data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
function Buzzfeed()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
       document.getElementById('image'+i).src=data.articles[i].urlToImage;
      document.getElementById("de"+i).innerHTML=data.articles[i].description;
    }})
  .catch((err)=> {console.error(err);})
}
function CNBC()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src=data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
function CNN()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
       .then(data =>{
         for(var i=0;i<data.articles.length;i++)
         {document.getElementById("headline"+i).innerHTML=data.articles[i].title;
         document.getElementById("li"+i).href=data.articles[i].url;
         document.getElementById('image'+i).src=data.articles[i].urlToImage;
        document.getElementById("de"+i).innerHTML=data.articles[i].description;
      }})
  .catch((err)=> {console.error(err);})
}
//searching in all india news
function globalSearch()
{console.log("enter");
  let x=document.getElementById("input").value;
 fetch(`https://newsapi.org/v2/everything?q=${x}&sources=google-news-in&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
   .then(data => data.json())
  .then(data =>{
    if(data.articles == "")
      {
     alert("News Not Found");
        }
    else{
   for(var i=0;i<data.articles.length;i++){
     document.getElementById("headline"+i).innerHTML=data.articles[i].title;
     document.getElementById("li"+i).href=data.articles[i].url;
   document.getElementById('image'+i).src=data.articles[i].urlToImage;
  document.getElementById("de"+i).innerHTML=data.articles[i].description;}
    }
  })
 .catch((err)=> {console.error(err);})
}
//filter
function sorting()
{

let x=document.getElementById("input").value;
 var search=[];
 for(i=0;i<8;i++)
 {
   if(document.getElementById("ch"+i).checked)
   { let v1=document.getElementById("ch"+i).value;
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
        for(let i=0;i<data.articles.length;i++)
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
