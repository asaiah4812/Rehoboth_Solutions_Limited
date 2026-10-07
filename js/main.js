var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var b='Name: '+d.get('n')+'\nEmail: '+d.get('e')+'\n\n'+d.get('m');
location.href='mailto:rehobothsolutionsltd@gmail.com?subject='+encodeURIComponent('Farm assessment enquiry')+'&body='+encodeURIComponent(b);});}
