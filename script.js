let motivational_quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "It always seems impossible until it's done.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "We may encounter many defeats but we must not be defeated",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are never too old to set another goal or to dream a new dream.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Don't limit your challenges. Challenge your limits.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The key to success is to focus on goals, not obstacles.",
    "Do something today that your future self will thank you for.",
    "Little by little, a little becomes a lot.",
    "The best way to get started is to quit talking and begin doing.",
    "Don't stop when you're tired. Stop when you're done.",
    "Dream it. Wish it. Do it.",
    "Opportunities don’t happen, you create them.",
    "Sometimes later becomes never. Do it now.",
    "Success is the sum of small efforts repeated day in and day out.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Believe in yourself and all that you are.",
    "Your limitation—it’s only your imagination.",
    "Great things take time.",
    "Don’t wait for opportunity. Create it.",
    "Success is what happens after you have survived all your mistakes.",
    "Push yourself because no one else is going to do it for you.",
    "Stay positive. Work hard. Make it happen.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "Focus on being productive instead of busy.",
    "Don’t wish it were easier; wish you were better.",
    "Small steps every day lead to big results.",
    "Do what you can with what you have, where you are.",
    "The secret of getting ahead is getting started.",
    "The way to get started is to quit talking and begin doing.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Work hard in silence, let success make the noise.",
    "Action is the foundational key to all success.",
    "The best revenge is massive success.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Don't let yesterday take up too much of today.",
    "Failure is the condiment that gives success its flavor.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Make each day your masterpiece.",
    "Your only limit is you."
];

let funny_quotes = [
    "Never trust atoms. They make up everything.",
    "Life is short. Smile while you still have teeth.",
    "Light travels faster than sound. That’s why some people appear bright until you hear them speak.",
    "I am on a seafood diet. I see food and I eat it.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I’m on a 30-day diet. So far, I’ve lost 15 days.",
    "Life is too important to be taken seriously.",
    "Common sense is like deodorant. The people who need it most never use it.",
    "If at first you don’t succeed, skydiving is not for you.",
    "My bed is a magical place. I suddenly remember everything I had to do.",
    "Some cause happiness wherever they go; others whenever they go.",
    "Wine is constant proof that God loves us and loves to see us happy.",
    "Behind every great man is a woman rolling her eyes.",
    "If you think nobody cares if you’re alive, try missing a couple of payments.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Life is short. Buy the shoes, eat the cake, take the trip.",
    "I told my computer I needed a break, and it froze.",
    "Why do they allow ‘silent’ and ‘listen’ to be spelled with the same letters?",
    "My wallet is like an onion, opening it makes me cry.",
    "Always remember you’re unique… just like everyone else.",
    "I’m not lazy, I’m on energy-saving mode.",
    "Exercise? I thought you said extra fries!",
    "Age is merely the number of years the world has been enjoying you.",
    "Some days I amaze myself. Other days I put my keys in the fridge.",
    "If you think education is expensive, try ignorance.",
    "I intend to live forever. So far, so good.",
    "My favorite exercise is a cross between a lunge and a crunch. I call it lunch.",
    "I’m not short, I’m concentrated awesome.",
    "I am on a 25-hour diet. I sleep for one hour instead of eating.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Behind every successful person is a surprised cat.",
    "I told my wife she should embrace her mistakes. She hugged me.",
    "The problem with trouble is that it starts out as fun.",
    "Some cause happiness wherever they go; others whenever they go.",
    "Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.",
    "I’m writing a book. I’ve got the page numbers done.",
    "If life gives you lemons, add vodka.",
    "I’m not clumsy, I’m just on a very close relationship with the floor.",
    "I like long walks, especially when they are taken by people who annoy me.",
    "My bed and I are perfect for each other, but my alarm clock keeps trying to break us up.",
    "A clear conscience is usually the sign of a bad memory.",
    "Why is Monday so far from Friday but Friday so close to Monday?",
    "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get.",
    "Some people are like clouds. When they disappear, it’s a beautiful day.",
    "I followed a diet but it didn’t follow me back.",
    "If at first you don’t succeed, destroy all evidence that you tried.",
    "My life feels like a test I didn’t study for.",
    "My wallet is like an onion. Opening it makes me cry.",
    "People say nothing is impossible, but I do nothing every day."
    
]

let index= 0;

let quotesStarted = false;
let currentFontSize = 20;
let looped = false;
let history = [];

function selectingQuotes() {
    let selected_category= document.getElementById("category").value;

    if (selected_category === "motivation") {
        return motivational_quotes;
    }
    else {
        return funny_quotes;
    }
}

function generatingQuotes() {
    let quotes = selectingQuotes();
    document.getElementById("quote").innerText = quotes[index];
}


function showButtons() {
    let category = document.getElementById("category").value;

    if (category === "") {
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("randombtn").style.display = "none";
    }
    else {
        document.getElementById("quote").innerText = "Let's Start";
        if (quotesStarted === false) {
            document.getElementById("startbtn").style.display = "inline-block";

        } 

        else{
            document.getElementById("startbtn").style.display = "inline-block";
            document.getElementById("prevbtn").style.display = "none";
            document.getElementById("nextbtn").style.display = "none";
        }

        document.getElementById("randombtn").style.display = "inline-block";
    }
}

function startQuote() {
    index = 0;

    history = [];


    document.getElementById("startbtn").style.display="none";
    document.getElementById("nextbtn").style.display="inline-block"

    quotesStarted = true;

}

// function previousQuote() {
//     let previous_quotes = selectingQuotes();
//     // let prevBtn = document.getElementById("prevbtn");

//     // CASE 1: user is at index 0 AND has NOT looped yet → prev should do nothing
//     if (index === 0 && looped === false) {
//         // prevBtn.disabled = true;
//         return;  
//     }

//     // prevBtn.disabled = false;

//     // allow previous navigation
//     index--;

//     // CASE 2: if index becomes negative after full loop → go to last quote
//     if (index < 0) {
//         index = previous_quotes.length - 1;
//     }

//     generatingQuotes();
    

// }

function previousQuote() {
    if (history.length === 0) {
        return;
    }
    index = history.pop();
    generatingQuotes();

}


function nextQuote() {
    let next_quotes= selectingQuotes();

    history.push(index);

    index++;

    if (index === next_quotes.length) {
        index = 0;
        looped = true;
    }

    // show prev button if we clicked next once or the quotes are looped atleast once.
    if (index > 0 || looped === true) {
        document.getElementById("prevbtn").style.display = "inline-block";
    }

    generatingQuotes();
}

function randomQuote() {
    let quotes = selectingQuotes();
    history.push(index);
    index = Math.floor(Math.random()*quotes.length);
    generatingQuotes();
    document.getElementById("prevbtn").style.display = "inline-block";

}

document.getElementById("themeToggle").addEventListener("click",function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("themeToggle").innerText = "Light-mode";
    }else {
        document.getElementById("themeToggle").innerText = "dark-mode";
    }
});

document.getElementById("increasefont").addEventListener("click", function() {
    if (currentFontSize < 30){
        currentFontSize += 2;
        document.getElementById("quote").style.fontSize = currentFontSize + "px";
    }

});


document.getElementById("decreasefont").addEventListener("click", function() {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.getElementById("quote").style.fontSize = currentFontSize + "px";
    } 
});