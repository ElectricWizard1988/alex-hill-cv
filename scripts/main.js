window.onscroll = function() {
    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
      document.getElementById('scroll-to-top').style.display = "block";
    } else {
      document.getElementById('scroll-to-top').style.display = "none";
    }
  }
  
  window.onload=function(){
  document.getElementById('scroll-to-top').addEventListener('click', function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  })}
