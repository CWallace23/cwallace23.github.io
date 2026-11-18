const talkCategory = [ 'take a fun idea to its absolute limit', 'show you how to make something', 'show off what I can do in Excel', 'exercise my personal frustrations',   'shitpost',   'show off something I\'ve 3D printed',   'show off a cool toy',   'do a deep dive',   'attempt to nerdsnipe you',   'describe a cool thing']

const talkSource = ['reading an old book', 'reading an old paper', 'eating', 'in someone else\'s MathsJam talk', 'in my classroom', 'in a charity shop', 'on social media', 'on holiday', 'in my house', 'out in nature']

const talkMaths=['about combinatorics', 'about units', 'about graph theory', 'about probability', 'about control theory', 'a meta talk about Mathsjam talks', 'about modelling', 'exploring data I found online', 'based on some truly arcane maths', 'about physics']

const talkConnection=['food', 'infrastructure', 'crafting', 'children\'s toys', 'origami', 'my job', 'an 80s TV show', 'space', 'an 80s video game', 'puzzles'];

const talkHelper = ['Desmos', 'Geogebra', 'Ice Col Beveridge', 'my students', 'AI', 'everyone at Mathsjam', 'all my free time', 'lots of annual leave', 'my superior intellect', 'some elaborate Python code'];

const talkTitle = ['a meme', 'a reference to a really old song', 'deliberately vague to give me more time to prepare', 'simple and to the point', 'too long to fit neatly on the programme', 'an in-joke that two people will get (and they\'ll love it)', 'a pun', 'only distantly connected to the rest of the talk', 'clickbait', 'placeholder1'];

const talkPreparation = ['shiny fancy Javascript slides', 'something clever on the visualiser', 'a high-stakes live demonstration', 'some basic Beamer slides', 'no slides, I\'ll just talk', 'physical prop(s)', 'a geogebra applet', 'noughties style Powerpoint slides (WordArt galore)', '5000 slides, I\'ll talk fast', 'minimally'];

const talkAudience = ['people who came to MathsJam in 2018', 'people who also have exactly my job', 'anyone over the age of 35', 'maths teachers', 'me', 'Doctor Who fans', 'all mathematicians!', 'anyone who loves numbers', 'my fellow enthusiasts', 'my fellow nerds'];

const talkJoke = ['leaving a proof as an exercise for the reader', 'a margin being too narrow for something', 'a proof by Mathsjam', 'how over-publicised Chalkdust is', 'Matt Parker\'s obsession with road signs', 'something that happened in a Mathsjam talk three years ago', 'placeholder1', 'placeholder2', 'placeholder3', 'placeholder4'];

const talkProblem = ['the microphone breaking', 'my demo going wrong', 'my slide transitions outpacing me', 'running out of time', 'realising I uploaded the wrong slides', 'forgetting the script halfway through', 'the calculation not quite working out', 'placeholder1', 'placeholder2', 'placeholder3']

const talkStyle = ['confident', 'very loud', 'well-rehearsed', 'a bit nervous', 'hilarious', 'a bit too fast', 'commanding', 'excitable', 'calm', 'memorable']

const talkPrompt = ['check out my YouTube channel', 'read this book', 'look at my blog', 'visit my website', 'solve this puzzle', 'enter my competition competition', 'taste my Bakeoff cake', 'check out my online shop', 'write their own Mathsjam talk', 'placeholder1']

const talkTask = ['Chalkdust', 'the Finite Group', 'the Aperiodical', 'the MathsJam Jam', 'the Pseudorandom Ensemble', 'Mathsworld', 'Maths Week', 'their monthly MathsJam', 'Gathering for Gardiner', 'MathsGear']

// Function to display a random image and its associated text
function displayRandomcombo() {
    const randomised = Array.from({length:14}, () => Math.floor(Math.random() * 10));
    const textFirst = document.getElementById('talkCat');
    const textSecond = document.getElementById('talkSou');
    const textThird = document.getElementById('talkMat');
    const textFourth = document.getElementById('talkCon');
    const textFifth = document.getElementById('talkHelp');
    const textSixth = document.getElementById('talkPrep');
    const textSeventh = document.getElementById('talkAud');
    const textEighth = document.getElementById('talkJok');
    const textNinth = document.getElementById('talkTit');
    const textTenth = document.getElementById('talkProb');
    const textEleventh = document.getElementById('talkSty');
    const textTwelfth = document.getElementById('talkProm');
    const textThirteenth = document.getElementById('talkTas');

    textFirst.textContent = talkCategory[randomised[1]];
    textSecond.textContent = talkSource[randomised[2]];
    textThird.textContent = talkMaths[randomised[3]];
    textFourth.textContent = talkConnection[randomised[4]];
    textFifth.textContent = talkHelper[randomised[5]];
    textSixth.textContent = talkPreparation[randomised[6]];
    textSeventh.textContent = talkAudience[randomised[7]];
    textEighth.textContent = talkJoke[randomised[8]];
    textNinth.textContent = talkTitle[randomised[9]];
    textTenth.textContent = talkProblem[randomised[10]];
    textEleventh.textContent = talkStyle[randomised[11]];
    textTwelfth.textContent = talkPrompt[randomised[12]];
    textThirteenth.textContent = talkTask[randomised[13]];

}

// Add event listener to the Refresh button
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', displayRandomcombo);

// Display a random image and text when the page loads
window.addEventListener('load', displayRandomcombo);
