const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 100;

    window.speechSynthesis.speak(text_speak);
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})
function wishMe() {
    speak("Hello Boss.This is Hadron ready to help you.");
}

window.addEventListener('load', ()=>{
    speak("Activating Hadron");
    speak("Going online");
    wishMe();
})

function speakThis(message) {
    var query=document.querySelector('.info2').value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss.Hadron is Web Assistant that can help you get your results faster.";
        speech.text = finalText;
    }
    else if(message.includes('wish me')){
        wishMe();
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "Hello boss,My name is Hedron Bot";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if(message.includes('leetcode')){
        window.open(`https://leetcode.com/problemset/all/?search=${query}`);
        const fin="I opened Leetcode for problems of"+query+"category"
        speech.text = fin;
    }
    else if(message.includes('codechef')){
        window.open(`https://www.codechef.com/users/${query}`);
        const fin="I opened Codechef Profile"
        speech.text = fin;
    }
    else if(message.includes('codeforces')){
        window.open(`https://codeforces.com/profile/${query}`);
        const fin="I opened Codeforces Profile"
        speech.text = fin;
    }
    else if(message.includes('news')){
        window.open(`https://news.google.com/search?q=${query}&hl=en-IN&gl=IN&ceid=IN%3Aen`);
        const fin="I got the news"
        speech.text = fin;
    }
    else if(message.includes('youtube')){
        window.open(`https://www.youtube.com/results?search_query=${query}`);
        const fin="I got your youtube results";
        speech.text = fin;
    }
    else if(message.includes('weather')){
        var loc=message.slice(message.lastIndexOf(' '));
        window.open(`https://www.weather-forecast.com/locations/${query}/forecasts/latest`);
        const fin=`Current Weather`;
        speech.text = fin;
    }
    else if(message.includes(" developers portfolio")){
        window.open(`https://shirsho404.github.io/sdrportfolio/`);
        const fin=`Getting you to the developer's portfolio`;
        speech.text = fin;
    }
    else if(message.includes("spotify")){
        window.open(`https://open.spotify.com/search/${query}`);
        const fin=`Getting Your song on spotify`;
        speech.text = fin;
    }
    else {
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
        const finalText = "I found some information for " + query + " on google";
        speech.text = finalText;
    }
    
    speech.volume = 2;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}