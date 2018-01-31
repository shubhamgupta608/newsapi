
function myfun()
{
 fetch("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
     .then(data =>{
      for(let i=0;i<data.articles.length;i++)
       {
         if(i<3)
         {
         var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
         <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
           <p id="de">${data.articles[i].description}</p>`;

       var l= document.createElement('div');
      l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;

             var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<10)
         {
           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;

             var l= document.createElement('div');
               l.innerHTML=t;
             var h=document.getElementById('sidebars');
             h.appendChild(l);
         }
       }
       })
 .catch((err)=> {console.error(err);})
}
//different channels
 var m= document.getElementsByClassName('ft');
 var z=m.length;
 for(let i=0;i<z;i++){
   m[i].addEventListener("click",function(){
	   var search_val=document.getElementById("input").value;

	   if(search_val.length >0)
	   {
		    document.getElementById("input").value=" ";
	   }
	    for(let k=0;k<8;k++)
       {

        if(document.getElementById("ch"+k).checked)
        {
         document.getElementById("ch"+k).checked=false;
		 }
      }


   channels(this.id);

   });
 }
function channels(channelname)
{

  document.getElementById("more-headlines").innerHTML="";
  document.getElementById("main-headline").innerHTML="";
  document.getElementById("sidebars").innerHTML="";
  fetch(`https://newsapi.org/v2/top-headlines?sources=${channelname}&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
  .then(data => data.json())
       .then(data =>{
         for(let i=0;i<data.articles.length;i++)
         { if(i<3)
         {
         var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
         <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
           <p id="de">${data.articles[i].description}</p>`;
         var l= document.createElement('div');
           l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;
          var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<10)
         {
           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;
         var l= document.createElement('div');
               l.innerHTML=t;
             var h=document.getElementById('sidebars');
             h.appendChild(l);
         }
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
              alert("News Related to "+ x +" Not Available in "+search);
         }
    else{
      document.getElementById("more-headlines").innerHTML="";
      document.getElementById("main-headline").innerHTML="";
      document.getElementById("sidebars").innerHTML="";
        for(let i=0;i<data.articles.length;i++)
    {
        if(i<3)
         {
         var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
         <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
           <p id="de">${data.articles[i].description}</p>`;
         var l= document.createElement('div');
          l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;

             var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<10)
         {
           var t=`<img id="image"  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id="li"><h1 id="headline">${data.articles[i].title}</h1></a>
             <p id="de">${data.articles[i].description}</p>`;

          var l= document.createElement('div');
               l.innerHTML=t;
             var h=document.getElementById('sidebars');
             h.appendChild(l);
             }
         }
   }
		 })

		var search_val=document.getElementById("input").value;

	   if(search_val.length >0)
	   {
		    document.getElementById("input").value=" ";
	   }
	    for(let k=0;k<8;k++)
       {
		   var f=document.getElementById("ch"+k).checked;
        if(f)
        {
         document.getElementById("ch"+k).checked=false;
		 }
      }

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
