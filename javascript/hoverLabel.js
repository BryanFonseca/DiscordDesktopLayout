const hoverLabelsLeft = document.querySelectorAll('.hover-label--left');

//15em es el valor máximo
const remInPixels = Number.parseFloat(window.getComputedStyle(hoverLabelsLeft[0]).fontSize);
const maxRemTextSize = 15;

hoverLabelsLeft.forEach(hoverLabelLeft => {
  const initialWidth = Number.parseFloat(window.getComputedStyle(hoverLabelLeft).width);
  if(initialWidth > remInPixels * maxRemTextSize){
    hoverLabelLeft.style.whiteSpace= 'initial';
    //se setea el width a 15em, ahora hardcoded a 204px
    hoverLabelLeft.style.width = remInPixels * maxRemTextSize + 'px';
  }
});
