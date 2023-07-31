burger=document.getElementsByClassName(`.burger`);
navbar=document.getElementsByClassName(`.navbar`);
rightnav=document.getElementsByClassName('.rightnav');
navlist=document.getElementsByClassName(`.navlist`);


burger.addeventListner(`click`,()=>
   {  
     navbar.toggleclass(`.hbar`);
     navlist.toggleclass(`.visibilty`);
     rightnav.toggleclass(`.visibilty`);
   })