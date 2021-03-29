// DROPDOWN

document.getElementById('myDropdown').addEventListener('mouseover',function(){
  document.getElementById('myMenu').style.width= document.getElementById('myDropdown').offsetWidth +'px';
  document.getElementById('myMenu').style.top = (document.getElementById('myDropdown').offsetHeight -2) + 'px';
  document.getElementById('myMenu').style.display ='block';
});

document.getElementById('myDropdown').addEventListener('mouseout',function(){
  document.getElementById('myMenu').style.display ='none';
});

// NAV SWITCH ACTIVE CLASS BETWEEN TABS
document.getElementById('tab1').addEventListener('mouseover',function(){
  document.getElementById('myDropdown').classList.remove('active');
});

document.getElementById('tab1').addEventListener('mouseout',function(){
  document.getElementById('myDropdown').classList.add('active');
});

document.getElementById('tab2').addEventListener('mouseover',function(){
  document.getElementById('myDropdown').classList.remove('active');
});

document.getElementById('tab2').addEventListener('mouseout',function(){
  document.getElementById('myDropdown').classList.add('active');
});

document.getElementById('tab4').addEventListener('mouseover',function(){
  document.getElementById('myDropdown').classList.remove('active');
});

document.getElementById('tab4').addEventListener('mouseout',function(){
  document.getElementById('myDropdown').classList.add('active');
});




