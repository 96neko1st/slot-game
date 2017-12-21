(function(){
    var panels = document.getElementsByClassName('panel');
    var spin = document.getElementById('spin');
    
    var cards = [
        'seven.png',
        'bell.png',
        'cherry.png'
        ];
        
    function runSlot(n){
        setTimeout(function(){
            panels[n].children[0].src = 
            './img/' + cards[Math.floor(Math.random() * cards.length)];
            runSlot(n);
        }, 50);
    }
    
    spin.addEventListener('click', function(){
        var i;
        for(i = 0; i < panels.length; i++){
            runSlot(i);
        }
    });
})();