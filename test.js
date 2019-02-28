var sentences = ["I am honored to be with you today for your commencement from one of the finest universities in the world.",
"Truth be told, I never graduated from college.",
"This is the closest I’ve ever gotten to a college graduation.",
"Today I want to tell you three stories from my life.",
"That’s it. No big deal. Just three stories.",
"The first story is about connecting the dots.",
"I dropped out of Reed College after the first 6 months,","but then stayed around as a drop-in for another 18 months or so before I really quit.",
"So why did I drop out?",
"It started before I was born.",
"My biological mother was a young, unwed college graduate student,","and she decided to put me up for adoption.",
"She felt very strongly that I should be adopted by college graduates,","so everything was all set for me to be adopted at birth by a lawyer and his wife.",
"Except that when I popped out they decided at the last minute that they really wanted a girl.",
"So my parents, who were on a waiting list, got a call in the middle of the night asking:", "We have an unexpected baby boy, do you want him?", "They said: Of course.",
"My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school.",
"She refused to sign the final adoption papers.",
"She only relented a few months later when my parents promised that I would someday go to college.",
"This was the start in my life."]

function play(num) {
        var audio = document.getElementById('audio'+num);
        if (audio.paused) {
            audio.play();
        }else{
            audio.currentTime = 0
        }
}

//makes play button and adds a sentence next to it
/*function make(){
    for(var i = 0; i < sentences.length; i++){
        var button = document.createElement('button');
        button.appendChild(document.createTextNode("PLAY")); 
        button.setAttribute('onclick','play('+i+')');
    
        var audio = document.createElement('audio')
        audio.id = 'audio' + i
        audio.setAttribute('src', i + '.mp3');
    
        document.body.appendChild(button);
        document.body.appendChild(audio);
    
        var span = document.createElement('span');
        var text = document.createTextNode(" " + sentences[i]);
        span.appendChild(text);
    
        document.body.appendChild(span);
        document.body.appendChild(document.createElement("br"));
    }


}*/

function make(){
    var div = document.createElement('div');
    for(var i = 0; i < sentences.length; i++){
        var button = document.createElement('button');
        button.appendChild(document.createTextNode("PLAY")); 
        button.setAttribute('onclick','play('+i+')');
    
        var audio = document.createElement('audio')
        audio.id = 'audio' + i
        audio.setAttribute('src', i + '.mp3');
    
        div.appendChild(button);
        div.appendChild(audio);
    
        var span = document.createElement('span');
        var text = document.createTextNode(" " + sentences[i]);
        span.appendChild(text);
    
        div.appendChild(span);
        div.appendChild(document.createElement("br"));
    }
    document.body.appendChild(div)


}

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);