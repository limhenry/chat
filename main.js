(function(document) {
    'use strict';

    var app = document.querySelector('#app');
    app.item = [{
    	human: "HueHue",
    	text: "Hello",
    	img: "img/hue.jpg"
	}];

    app.addItem = function(event) {
        event.preventDefault(); // Don't send the form!
        this.push('item', {
            human: "You",
            text: app.newItemValue,
            img: "img/you.jpg"
        });
        var recvDelay = Math.round(Math.random() * (4000 - 1000));
        document.getElementById("hue_status").textContent = "TYPING...";
        setTimeout(scrollToBottom, 0);
        setTimeout(func, recvDelay);       
        function func() {
            app.notbad();
           	setTimeout(scrollToBottom, 0);
        }
        function scrollToBottom(){
        	document.getElementById('mainContainer').scrollTop = 99999999999999999999999999999999999;
        }
        app.newItemValue = ""; 
    };

    app.notbad = function() {
        var heuheuehuehue = obama();
        this.push('item', {
            human: "HueHue",
            text: heuheuehuehue,
            img: "img/hue.jpg"
        });
        document.getElementById("hue_status").textContent = "ONLINE";
    }

    function obama() {

        var hueText = ["...", "huehuehue", ""];
        var dotAndFriend = [".", "?", "!", "...", ""];
        var name = "Hue";
        var huemessage = "";
        var randomOne = function(first, second) {
            return Math.round(Math.random() * (second - first)) + first;
        }
        var randomTwo = function(array) {
            return array[randomOne(0, array.length - 1)];
        }
        var huehuelol = randomOne(1, 4);         
        for (var j = 0; j < huehuelol; j++) {
            huemessage += randomTwo(hueText) + " ";
            var len = randomOne(1, 10);
            for (var i = 0; i < len; i++) {
                huemessage += name + " ";
            }
            huemessage += randomTwo(dotAndFriend) + " ";
        }
        return huemessage;
    }

    app.handleSWError = function(){
    	console.log("handleSWError")
    };

    app.handleSWUpdated = function(){
		console.log("handleSWUpdated")
    };

    app.displayInstalledToast = function(){
    	console.log("displayInstalledToast")
    }
})(document);