
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {}

$(document).on('vclick', '#btn-cordova-confirm', cordovaConfirm);
$(document).on('vclick', '#btn-cordova-beep', cordovaBeep);
$(document).on('vclick', '#btn-cordova-vibration', cordovaVibration);

// Installation:
// cordova plugin add cordova-plugin-dialogs

function cordovaConfirm() {
    var message = 'Please choose your action.';
    var title = 'Action Confirm';
    var buttonLabel = 'Ring the bell,Vibrate the phone';

    navigator.notification.confirm(message, callback, title, buttonLabel);

    function callback(btnIndex) {
        //alert('You can run codes here.');

        if (btnIndex == 0) {
            alert('You have not choosen any button.')
            
        }

        else if (btnIndex == 1) {
            alert('You choose to ring a bell.');
            navigator.notification.beep(4);
            
        }

        else if (btnIndex == 2) {
            alert('You choose to vibrate the mobile.');
            navigator.vibrate(400, 600, 1000, 400, 600, 1000);
        }

        //alert('And here...');
    }
}

function cordovaBeep() {
    navigator.notification.beep(4);
}

// VIBRATION
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-vibration/index.html

// Installation:
// cordova plugin add cordova-plugin-vibration


function cordovaVibration() {
    navigator.vibrate(1000, 1000, 1000, 3000, 3000, 3000, 1000, 1000, 1000);
}