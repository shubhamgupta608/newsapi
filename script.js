function myfun()
{
  fetch("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=94e25a4c66eb4ea791f3898bdce7bcea")
  .then(data => data.json())
     .then(data =>{
   data1=data;
  for(let i=0;i<data.articles.length;i++)

       {
         if(i<3)
         {
         var t=`<img id=image${i} src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
         <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
           <p id=de${i}>${data.articles[i].description}</p>`;

        var l= document.createElement('div');
          l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;

             var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<9)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;

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
if(this.id)
channels(this.id);
else{
  console.log("hello name");
Categories(this.name);
}
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
         data1=data;
           for(let i=0;i<10;i++)
         {
           if(i<3)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
         var l= document.createElement('div');
           l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
          var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<9)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
         var l= document.createElement('div');
               l.innerHTML=t;
             var h=document.getElementById('sidebars');
             h.appendChild(l);
         }
    }})
  .catch((err)=> {console.error(err);})
}

function Categories(name1)
{

  document.getElementById("more-headlines").innerHTML="";
  document.getElementById("main-headline").innerHTML="";
  document.getElementById("sidebars").innerHTML="";
  fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${name1}&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
  .then(data => data.json())
       .then(data =>{
         data1=data;
         console.log(data1);
         for(let i=0;i<data.articles.length;i++)
         { if(i<3)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
         var l= document.createElement('div');
           l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<6) {

           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
          var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<9)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
         var l= document.createElement('div');
               l.innerHTML=t;
             var h=document.getElementById('sidebars');
             h.appendChild(l);
         }
    }})
  .catch((err)=> {console.error(err);})
}



function sorting()
{
check_value=0;
  a=[];
  let x=document.getElementById("input").value;
  var search=[];
   for(let k=0;k<8;k++)
  {
    if(document.getElementById("ch"+k).checked)
  {
    check_value=check_value+1;
    let v1=document.getElementById("ch"+k).value;
    search.push(v1);
   }
  }



if(x!=""&&check_value == 0)
 {
  data1.articles.forEach(function(e){
    let t=e.title.includes(x);
    let d=e.description.includes(x);
    if(t==true||d==true)
    { a.push(e);}
    });

if(a.length>0)
    {
       document.getElementById("more-headlines").innerHTML="";
      document.getElementById("main-headline").innerHTML="";
      document.getElementById("sidebars").innerHTML="";
      for(let p=0;p<a.length;p++){
      var t=`<img id=image${p}  src="${a[p].urlToImage}" alt="image not Found" width="300" height="228"/>
          <a href="${a[p].url}" id=li${p}><h1 id=headline${p}>${a[p].title}</h1></a>
            <p id=de${p}>${a[p].description}</p>`;
            var l= document.createElement('div');
           l.innerHTML=t;
          var h=document.getElementById('main-headline');
          h.appendChild(l);
       }
    }
    else {
      document.getElementById("more-headlines").innerHTML="";
      document.getElementById("main-headline").innerHTML="";
      document.getElementById("sidebars").innerHTML="";

     alert(more());
    }
// var t=`<button type="submit" id="btn" >more-news</button>`;
//
//   var l= document.createElement('div');
//     l.innerHTML=t;
//    var h=document.getElementById('main-headline');
//    h.appendChild(l);
}


if(x.length>0 && check_value>0)
 {
   console.log("checking");
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
        if(i<4)
         {
           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;
         var l= document.createElement('div');
          l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         else if(i<7) {

           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;

             var l= document.createElement('div');
              l.innerHTML=t;
             var h=document.getElementById('more-headlines');
             h.appendChild(l);
         }
         else if(i<11)
         {
             var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
              <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
              <p id=de${i}>${data.articles[i].description}</p>`;
                var l= document.createElement('div');
                l.innerHTML=t;
                 var h=document.getElementById('sidebars');
                  h.appendChild(l);
          }
      }
   }
});

		    var search_val=document.getElementById("input").value;
        if(search_val.length >0)
	       {
		    document.getElementById("input").value=" ";
	        }


}
}

function more()
{
  let x=document.getElementById("input").value;

    fetch(`https://newsapi.org/v2/everything?q=${x}&pagesize=50&apiKey=94e25a4c66eb4ea791f3898bdce7bcea`)
  .then(data=>data.json())
  .then(data =>{

    document.getElementById("more-headlines").innerHTML="";
    document.getElementById("main-headline").innerHTML="";
    document.getElementById("sidebars").innerHTML="";
      for(let i=0;i<data.articles.length;i++)
      {
        if(i<4)
         {

          var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;

             if(data.articles[i].urlToImage == null)
             {
             document.getElementById("main-headline").innerHTML="";
           }else{
         var l= document.createElement('div');
          l.innerHTML=t;
           var h=document.getElementById('main-headline');
           h.appendChild(l);
         }
         }
         else if(i<7) {

           var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
           <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
             <p id=de${i}>${data.articles[i].description}</p>`;

             if(data.articles[i].urlToImage == null )
             {
             document.getElementById("more-headlines").innerHTML="";
           }else{

             var l= document.createElement('div');
          l.innerHTML=t;
           var h=document.getElementById('more-headlines');
           h.appendChild(l);
         }
         }
         else if(i<11)
         {
             var t=`<img id=image${i}  src="${data.articles[i].urlToImage}" alt="image not Found" width="300" height="228"/>
              <a href="${data.articles[i].url}" id=li${i}><h1 id=headline${i}>${data.articles[i].title}</h1></a>
              <p id=de${i}>${data.articles[i].description}</p>`;
              if(data.articles[i].urlToImage == null)
              {
              document.getElementById("sidebars").innerHTML="";
            }else{
            var l= document.createElement('div');
           l.innerHTML=t;
            var h=document.getElementById('sidebars');
            h.appendChild(l);
          }
          }
      }
  });


}
