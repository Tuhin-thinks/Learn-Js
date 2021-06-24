const texts = ["innovative Python scripts","C++ scripts for implementing heavy processes", "Java to solve seciruty problems", "HTML/CSS to design my implementations", "cool Python tricks to solve boring tasks in minutes", "really good sci-fi movies", "watching web-series at netflix/amazon prime", "fixing code for others", "freelancing", "finding really short path to solve something big", "automating search for to feed my interest about weird events around the world", "making myself a better person"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 120);  // infinite loop, called after each 150ms
}());  // self-invoked function