  var elements=document.getElementsByClassName("progress-bar");
  var count=elements.length;
  var h = window.innerHeight;
  for(var j= 0;j<count;j++){
    var element = elements[j];
    element.percentString = element.children[0].innerHTML;
    element.percentPosition = element.percentString.indexOf('%');
    element.percent = element.percentString.substring(0,element.percentPosition) - '0';
    var i=0;
    element.sec = 500;
    element.judge = null;
    element.loading = function(){
      i=i+1;
      if(i<=element.percent){
      element.children[0].innerHTML=i+'%';
      element.children[0].style.width=i+'%';
      }
      else{
      window.clearInterval(element.load);
      }
    }
    if(element.offsetTop<h){
    element.load = setInterval("loading()",Math.floor(element.sec/element.percent));
    }
    else{
      window.onscroll=function(){
      console.log(element.percent+'@@@@@@')
      element.judge = element.offsetTop - document.body.scrollTop < h;
        if(element.judge){
          element.load = setInterval("element.loading()",Math.floor(element.sec/element.percent));
        }
      }
    }
  }
