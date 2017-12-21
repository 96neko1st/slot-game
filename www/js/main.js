(function(){
    var panels = document.getElementsByClassName('panel');
    var spin = document.getElementById('spin');
    
    var cards = [
        'seven.png',
        'bell.png',
        'cherry.png'
        ];
      
    var timers = []; 
    var stopCount = 0;
    
    initPanel();
    
    //パネル画像をランダムに切り替える
    function runSlot(n){
        timers[n] = setTimeout(function(){
            panels[n].children[0].src = 
            './img/' + cards[Math.floor(Math.random() * cards.length)];
            runSlot(n);
        }, 50);
    }
    
    //パネルの初期化
    function initPanel(){
        for(var i = 0; i < panels.length; i++){
            panels[i].children[1].addEventListener('click', function(){
                if(this.className.indexOf("inactive") !== -1){
                    return;
                }
                clearTimeout(timers[this.dataset.index]);
                stopCount++;
                this.className = "stop inactive";
                if(stopCount === panels.length){
                    stopCount = 0;
                    spin.className = "";
                    checkResults();
                }
            });
        }
    }
    
    //一致していないパネルがあると色を薄くする
    function checkResults(){
        var panelLeft   = panels[0].children[0];
        var panelCenter = panels[1].children[0];
        var panelRight  = panels[2].children[0];
        
        if(panelLeft.src !== panelCenter.src && panelLeft.src !== panelRight.src){
            panelLeft.className = 'unmatched';
        }
        if(panelCenter.src !== panelLeft.src && panelCenter.src !== panelRight.src){
            panelCenter.className = 'unmatched';
        }
        if(panelRight.src !== panelCenter.src && panelRight.src !== panelLeft.src){
            panelRight.className = 'unmatched';
        }
    }
    
    //spinボタンを押すと回転が始まる。
    spin.addEventListener('click', function(){
        if(this.className.indexOf("inactive") !==-1){
            return;
        }
        this.className = "inactive";
        for(var i = 0; i < panels.length; i++){
            runSlot(i);
            panels[i].children[0].className = "";
            panels[i].children[1].className = "stop"
        }
    });
})();