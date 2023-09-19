
function changing(){
  var rev=document.getElementById('inputspells');
  var spell=document.getElementById('spells');
  var m=rev.value;
  spell.innerHTML="";
     for(var i=m.length; i>=0; i--){
  spell.innerHTML+=m.charAt(i);
     }
}