window.addEventListener('keydown',function(e){
    const adio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!adio) return;
    adio.currentTime = 0 ;
    adio.play();
});