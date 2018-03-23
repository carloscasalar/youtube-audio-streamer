(function (){
    'use strict';

    var noSleep;

    var toggleSleepCtrl = document.getElementById('prevent-sleep');

    toggleSleepCtrl.addEventListener('click', handleClick);

    function handleClick(event) {
        if(!noSleep){
            if(!NoSleep){
                event.preventDefault();
                return;
            }

            noSleep = new NoSleep();
        }

        if(event.target.checked){
            noSleep.enable();
        }else{
            noSleep.disable();
        }
    }
})();
