const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = ['Im good, how are you?',
'Doing good friend',
'Hey, grow up']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated, you can speak');
};

recognition.onresult = event => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript
    content.textContent = transcript;
    readOutLoud(transcript)
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = `I did not understand you`;

    switch(message) {
        case 'how are you':
        speech.text = greetings[Math.floor(Math.random() * greetings.length)];
        break;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech)
}
