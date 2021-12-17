const hoverLabelsLeft = document.querySelectorAll('.hover-label--left');
const remInPixels = Number.parseFloat(window.getComputedStyle(hoverLabelsLeft[0]).fontSize);
//this value could also be added as a data attribute on the html element (data-max=15)
const maxRemTextSize = 15;

hoverLabelsLeft.forEach(hoverLabelLeft => {
  const initialWidth = Number.parseFloat(window.getComputedStyle(hoverLabelLeft).width);
  if(initialWidth > remInPixels * maxRemTextSize){
    hoverLabelLeft.style.whiteSpace= 'initial';
    hoverLabelLeft.style.width = remInPixels * maxRemTextSize + 'px';
  }
});
