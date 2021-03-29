var idArr = ['#tratament_termic', '#incineratoare', '#petrochimie'];

for(const c of idArr) {

  if(document.querySelector(c) === null){
    continue;
  }else{
    document.querySelector(c+' .container').addEventListener('mouseover', e =>{
      if(e.target.classList.contains('img-fluid')){
        const newHtml = '<p id="tooltipText" style="position:absolute; display:none; z-index: 1000; background-color:white; border: solid black 1px; padding:2px 5px; white-space: nowrap;"></p>'
        e.target.insertAdjacentHTML('beforebegin',newHtml);
      };
    });

    document.querySelector( c + ' .container').addEventListener('mouseout', e => {
      if(e.target.classList.contains('img-fluid')){
        const elem = document.getElementById('tooltipText');
        elem.parentNode.removeChild(elem);
      }
    });

    document.querySelector(c + ' .container').addEventListener('mousemove', e => {

      var rect = e.target.getBoundingClientRect();

      const tooltipText = document.getElementById('tooltipText');

      if(e.target.classList.contains('img-fluid')){
        let x,y;
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

        tooltipText.style.top = (y + 20) + 'px';
        tooltipText.style.left = (x ) + 'px';
        tooltipText.style.display = 'block';
        
        // tooltipText.textContent = e.target.parentNode.lastElementChild.firstElementChild.textContent;
        tooltipText.textContent = e.target.alt;
      };
    });
  }
};  