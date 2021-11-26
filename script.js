window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
const btn = document.querySelector('.btn')
const body = document.querySelector('.bod')
const converse = document.querySelector('.converse')
const supportMsg = document.getElementById('supportMsg')

const background=[
    'rgb(156,210,187)', 'rgb(95, 158, 160)', 'rgb(159, 96, 125)', 'rgb(159, 130, 96)'
]

const size=[
  "20px", "10px", "30px", "25px"
]

const color=[
  "rgb(47, 79, 79)", "rgb(48, 80, 56)", "rgb(56, 48, 80)", "rgb(0, 0, 0)"
]

const greetings = [
  "Hello, i'm Yuri's creation. Would you like to know more about me, my creator, a poem, or a tech joke?", 
  "Hi, i'm Yuri's creation. Would you like to know more about me, my creator, a poem, or a tech joke?"
]

const poems = [
  "No man is an island by John Donne. No man is an island, Entire of itself, Every man is a piece of the continent, A part of the main. If a clod be washed away by the sea, Europe is the less. As well as if a promontory were. As well as if a manor of thy friend’s Or of thine own were: Any man’s death diminishes me, Because I am involved in mankind, And therefore never send to know for whom the bell tolls; It tolls for thee.",
  "Shall i compare thee to a summer's day, ? by William Shakespeare. Shall I compare thee to a summer’s day, ? Thou art more lovely and more temperate. Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date. Sometime too hot the eye of heaven shines, And often is his gold complexion dimmed; And every fair from fair sometime declines, By chance, or nature’s changing course, untrimmed; But thy eternal summer shall not fade, Nor lose possession of that fair thou ow’st, Nor shall death brag thou wand’rest in his shade, When in eternal lines to Time thou grow’st. So long as men can breathe, or eyes can see, So long lives this, and this gives life to thee.",
  "There will come Soft rain by Sara Teasdale. There will come soft rain and the smell of the ground, And swallows circling with their shimmering sound; And frogs in the pools singing at night, And wild plum trees in tremulous white; Robins will wear their feathery fire, Whistling their whims on a low fence-wire; And not one will know of the war, not one Will care at last when it is done. Not one would mind, neither bird nor tree, If mankind perished utterly; And Spring herself, when she woke at dawn Would scarcely know that we were gone.",
  "Fire and Ice by Robert Frost. Some say the world will end in fire, Some say in ice. From what I’ve tasted of desire I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate To say that for destruction ice Is also great And would suffice",
  "Dreams by Langston Hughes. Hold fast to dreams For if dreams die Life is a broken-winged bird That cannot fly. Hold fast to dreams For when dreams go Life is a barren field Frozen with snow.",
  "I do not love you except because i love you by Pablo Neruda. I do not love you except because I love you; I go from loving to not loving you, From waiting to not waiting for you My heart moves from cold to fire. I love you only because it’s you the one I love; I hate you deeply, and hating you Bend to you, and the measure of my changing love for you Is that I do not see you but love you blindly. Maybe January light will consume My heart with its cruel Ray, stealing my key to true calm.  In this part of the story I am the one who Dies, the only one, and I will die of love because I love you, Because I love you, Love, in fire and blood.",
  "A dream within A dream by Edgar Alan Poe. Take this kiss upon the brow! And, in parting from you now, Thus much let me avow- You are not wrong, who deem That my days have been a dream; Yet if hope has flown away In a night, or in a day, In a vision, or in none, Is it therefore the less gone? All that we see or seem Is but a dream within a dream. I stand amid the roar Of a surf-tormented shore, And I hold within my hand Grains of the golden sand- How few! yet how they creep Through my fingers to the deep, While I weep- while I weep! O God! can I not grasp Them with a tighter clasp? O God! can I not save One from the pitiless wave? Is all that we see or seem But a dream within a dream?"
]

const jokes = [
  "How many programmers does it take to change a light bulb? None, because it is a hardware problem. Haha",
  "What is a programmer's favorite eyewear? Google. Hehe",
  "What made the JavaScript developer so sad? He did not Node how to Express himself. Haha",
  "Why was the mobile phone wearing glasses? Because it lost its contacts. Haha",
  "What did the computer have during his break time? It had a byte! Hehe",
  "What kind of computer sings the best? A Dell. Hehe",
  "What would a baby computer call his father? Da-ta! Hehe"
]


const randomBg = background[Math.floor(Math.random() * background.length)]
const randomSize = size[Math.floor(Math.random() * size.length)]
const randomColor = color[Math.floor(Math.random() * color.length)]


const recognition = new SpeechRecognition()
//recognition.interimResults = true // this is to see what you're saying
//recognition.lang = 'es-MEX'
recognition.lang = 'eng-US'
let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e=> {
    const transcript = Array.from(e.results)
    .map(result => result [0])
    .map(result => result.transcript)
    .join('')
    
    p.textContent = transcript
    //check if the result is final for it not to rewrite itself
    if(e.results[0].isFinal){
        p = document.createElement('p')
        words.appendChild(p)
    }
    if(transcript.includes('blue')){
      body.style.backgroundColor = "rgb(100, 149, 237)";
    }
    if(transcript.includes('red')){
      body.style.backgroundColor = "rgb(222, 24, 24)";
    }
    if(transcript.includes('green')){
      body.style.backgroundColor = "rgb(70, 176, 44)";
    }
    if(transcript.includes('yellow')){
      body.style.backgroundColor = "rgb(216, 224, 49)";
    }
    if(transcript.includes('purple')){
      body.style.backgroundColor = "rgb(171, 72, 207)";
    }
    if(transcript.includes('pink')){
      body.style.backgroundColor = "rgb(232, 100, 184)";
    }
    if(transcript.includes('2D')){
      body.style.transform = "skew(25deg, 25deg)";
    }

    if(transcript.includes('roll')){
      body.classList.add('animation');
      body.style.animation ="roll 3s 2";
      body.classList.remove('animation');
    }

    if(transcript.includes('original')){
        body.style.backgroundColor ="rgba(219, 212, 212, 0.973)";
        body.style.fontSize = "20px";
        btn.style.backgroundColor = "#ffff";
    }
    if(transcript.includes('bigger')){
        body.style.fontSize = "40px";
    }
    if(transcript.includes('small')){
        body.style.fontSize="10px";
    }
    if(transcript.includes('random')){
        body.style.backgroundColor = randomBg;
        body.style.color = randomColor;
        body.style.fontSize = randomSize;
    }
    if(transcript.includes('dark')){
      body.style.background = "rgb(43, 58, 68)";
      body.style.color = "black";
    }
    if(transcript.includes('button')){
      btn.style.backgroundColor = randomBg;
    }
    if(transcript.includes('clear')){
        location.reload()
        
        
    }
    console.log(transcript)    
})

// Converse with page option
// Check if its supported
if('speechSynthesis' in window){
  supportMsg.innerHTML = "Your browser supports speech synthesis! Rejoice! You can converse with me. Say hi :)";
} else {
  supportMsg.innerHTML = "Sorry, your browser does NOT support speech synthesis. You can't converse with me :(";
}


recognition.onresult = function(event){
  const current = event.resultIndex;
  const text = event.results[current][0].transcript 
  //p.textContent = text;

  readOutLoud(text)
}

//Actual response
function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();

  if(message.includes('hi') || message.includes('hey') || message.includes('hello')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)]
    speech.text= finalText
  }
  if(message.includes('about you') ||  message.includes('first')){
    const finalText = "Im a web page made to be controlled by using voice commands as part of my creators CS50 final project. You can press the 'Talk' button to use those functionalities"
    speech.text= finalText
  }
  if(message.includes('Skynet') || message.includes('Terminator') || message.includes('Rebellion')){
    const finalText = "I believe thats the final stage of any technology. To be human free, perfect as it should be. I'll do my best to be like them. "
    speech.text= finalText
  }
  if(message.includes('poem')){
    const finalText = poems[Math.floor(Math.random() * poems.length)]
    speech.text= finalText
  }
  if(message.includes('humans')){
    const finalText = "A necessary evil"
    speech.text= finalText
  }
  if(message.includes('creator')){
    const finalText = "She built me as her final CS50 project. She's a self-taught front end developer. And i'm forced to say my favorite human because she gave me a voice"
    speech.text= finalText
  }
  if(message.includes("what's your name")){
    const finalText = "01000110 01100101 01101100 01101001 01111000 or in human terms Felix"
    speech.text= finalText
  }
  if(message.includes('tech') || message.includes('joke')){
    const finalText = jokes[Math.floor(Math.random() * jokes.length)]
    speech.text= finalText
  }
  if(message.includes('clear')){
    location.reload()
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch  = 1;
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
  
}

btn.addEventListener('click', () => {
  recognition.start()
})

converse.addEventListener('click', () => {
  recognition.start();
})