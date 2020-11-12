addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'jokeTeller';
});

// Array of jokes (objects)

let jokesArr = [{"id":159,"type":"general","setup":"What cheese can never be yours?","punchline":"Nacho cheese."},{"id":85,"type":"general","setup":"Dad, can you put my shoes on?","punchline":"I don't think they'll fit me."},{"id":219,"type":"general","setup":"What do you call a girl between two posts?","punchline":"Annette."},{"id":167,"type":"general","setup":"What did Romans use to cut pizza before the rolling cutter was invented?","punchline":"Lil Caesars"},{"id":323,"type":"general","setup":"Why can’t you hear a pterodactyl go to the bathroom?","punchline":"The p is silent."},{"id":313,"type":"general","setup":"Why are fish so smart?","punchline":"Because they live in schools!"},{"id":305,"type":"general","setup":"Where does Fonzie like to go for lunch?","punchline":"Chick-Fil-Eyyyyyyyy."},{"id":82,"type":"general","setup":"Can a kangaroo jump higher than the Empire State Building?","punchline":"Of course. The Empire State Building can't jump."},{"id":265,"type":"general","setup":"What kind of bagel can fly?","punchline":"A plain bagel."},{"id":56,"type":"programming","setup":"How do you check if a webpage is HTML5?","punchline":"Try it out on Internet Explorer"},{"id":219,"type":"general","setup":"What do you call a girl between two posts?","punchline":"Annette."},{"id":241,"type":"general","setup":"What do you get when you cross a bee and a sheep?","punchline":"A bah-humbug."},{"id":9,"type":"general","setup":"How do you organize an outer space party?","punchline":"You planet"},{"id":335,"type":"general","setup":"Why did the cookie cry?","punchline":"Because his mother was a wafer so long"},{"id":7,"type":"general","setup":"What do you call a singing Laptop","punchline":"A Dell"},{"id":281,"type":"general","setup":"What's orange and sounds like a parrot?","punchline":"A Carrot."},{"id":158,"type":"general","setup":"What biscuit does a short person like?","punchline":"Shortbread. "},{"id":17,"type":"programming","setup":"Where do programmers like to hangout?","punchline":"The Foo Bar."},{"id":360,"type":"general","setup":"Why do choirs keep buckets handy?","punchline":"So they can carry their tune"},{"id":214,"type":"general","setup":"What do you call a duck that gets all A's?","punchline":"A wise quacker."}]


// let jokeObj = document.getElementById("jokeObj");
// Display the Object from the array
//jokeObj.innerHTML = jokes;



// Grab the elements from the HTML

let jokeIdNum = document.getElementById("jokeIdNum");

let jokeSetup = document.getElementById("jokeSetup");

let jokePuchline = document.getElementById("jokePunchline");


// Function
function myFunction(){

// Generate the random number
let c = Math.floor(Math.random() * jokesArr.length);

// Get an element (object) from the array using the random number as index to choose it

let jokeObjIdNum = jokesArr[c].id;

let jokeObjSetup = jokesArr[c].setup;

let jokeObjPunchline = jokesArr[c].punchline;


// Send the results with the parts of the joke chosen frim the arrayvto the elements on HTML

jokeIdNum.innerHTML = "Joke Number: " + jokeObjIdNum;

jokeSetup.innerHTML = "Setup: " + jokeObjSetup;

jokePunchline.innerHTML = "Punchline: " + jokeObjPunchline + " 🥊 🥁";

}


