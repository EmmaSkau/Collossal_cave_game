// VARIABLES
const inputField = document.querySelector("#userInput"); /* for the users input*/
const main = document.querySelector("main"); 
let userInput = [];
const box = document.querySelector(".box");

// BLINKING SQUARE
const square = document.querySelector("i.fa-square");
setInterval(function() {
    square.classList.toggle("blink");
}, 400);


// INSERT TEXT
const addText = (text, container = main) => {
    if (container === box) {
        let paragraph = document.createElement("p");
        paragraph.innerText = text;
        container.appendChild (paragraph);
        container.lastChild.scrollIntoView();
    }
}


// STORAGE
const storage = {
    Wand: ["Wand"],
    pokemonBallCount: 2,
    berryCount: 0,
    seeStorage: function () {
        this.pokemon.forEach(item => {
            addText(item)
        });
        
        addText(`pokeballs: ${this.pokemonBallCount}`);
       // addText(`Pokeballs:` + backpack.pokemonBallCount);
        //addTe(`pokeballs: ${backpack.pokeballCount}`) -- Dette Kan også bruge istedet for ovenstående
        addTe(`Berries:` + this.berryCount);
    }
}


// DISPLAY USER INPUT
const whatToDo = (userInput) => {
    addText(userInput, box);
    switch (userInput){
        case "backpack":
            storage.seeStorage();
            break;
        
        case "take":
            addText("It is now in your backpack", box);
            break;

        case "help":
            addText("You can move around by using the word shown like 'this'. You have a backpack with essentials in it. You can access the backpack by writing 'backpack'. You can also put things in your backpack by writing 'take'. You have a wand, where you can 'lift' and 'attack'. If there are no more questions type 'no'", box);
            break;
        
        //Ja nej til instruktioner
        case "yes":
            addText("You can move around by using the word shown like 'this'. You have a backpack with essentials in it. You can access the backpack by writing 'backpack'. You can also put things in your backpack by writing 'take'. You have a wand, where you can 'lift' and 'attack'. If there are no more questions type 'no'", box);
            break;

        case "no":
            addText("There is a big fallen tree in front of you. You can go 'right', 'left' or use your 'wand'.", box);
            break;


        // Fallen tree
        case "left":
            addText("In front of you there is a big wall that you cannot climb.", box);
            break;
        
        case "wand":
            addText("You take out your wand and you lift the tree away from your path. You can now go 'forward'.",box);
            break;
        
        case "right":
            addText("In front of you there is a big wall that you cannot climb.", box);
            break;
        
        case "forward":
            addText("As you make your way past the fallen tree, you catch a glimpse of light shining through the trees up ahead. To your left, there is a path that seems to lead in the direction of the light. Now, you must decide whether to continue forward or take the left path. Will you choose to 'go straight ahead' or 'go left?'", box);
            break;
        
        // Away from tree
        case "go straight ahead":
            addText("You make the decision to continue straight ahead towards the light. As you draw nearer, the trees begin to fade away and reveal a magnificent, magical lake. You see fairies dancing along the shore and a boat waiting nearby. You head towards the boat, eager to explore the mystical waters. Write 'boat'", box);
            break;

        case "go left":
            addText("The path meanders and twists, and you can see something glimmering in the distance. As you approach, the trees gradually recede and a stunning magical lake appears before you. Fairies flit and dance along the shore, and you spot a boat waiting nearby. You make your way towards the boat, curious to see what secrets the enchanted waters may hold. Write 'boat'", box);
            break;  

        // Fairies attack by the boat
        case "boat":
            addText("As you approach the boat, the fairies suddenly stop their dance and fix their gaze upon you. With a loud, angry cry, they charge towards you with the intention of attacking. In this dire situation, you must make a quick decision - will you stand your ground and 'fight back', or will you 'flee' for safety? The fairies are getting closer by the second, so you must act fast. What will you do to protect yourself before the fairies reach you?", box);
            break;

        case "fight back":
            addText("Without hesitation, you lunge towards the fairies with your wand at the ready. As they charge towards you, you shout out the incantation for 'Expelliarmus!' and two of the fairies fall to the ground, defeated. However, four more fairies are still headed your way, even angrier than before. With time running out, you must quickly decide what to do next. Will you 'try again' or will you try to 'run away'?", box);
            break;
            
        case "flee":
            addText("In a sudden burst of adrenaline, you turn and sprint back towards the dense, dark forest you had just come from. The fairies stop in their tracks as you disappear into the forest, realizing that you are no longer a threat to them. With a relieved sigh, you watch as they fly back towards their boat and continue their dance by the magical lake. However, you can't shake off the feeling that need to get on that boat to get home. Maybe you should just try and 'fight back'?", box);
            break;

        case "try again":
            addText("Determined not to be bullied by the fairies any longer, you quickly regain your composure and ready your wand once more. With a fierce yell, you shout out the incantation for 'Expelliarmus!!!' even louder than before. This time, all of the fairies fall to the ground, unconscious. With a feeling of satisfaction and triumph, you look around to make sure that the coast is clear. Now that you have shown the fairies that you are not to be messed with, what do you plan to do next? Maybe 'take the boat'?", box);
            break;
        
        case "run away":
            addText("Unfortunately, it's too late to run now as the fairies are much too fast. You stand your ground, prepared to defend yourself against their attack. As they approach, you grip your wand tightly and wait for the right moment to strike. With the fairies almost upon you, you must 'try again'?", box);
            break;
        
        //Boat
        case "take the boat":
            addText("Taking a moment to catch your breath and calm your nerves, you realize that there is no immediate danger surrounding you. You take a closer look at the old boat you jumped onto and notice that there are oars sitting ready for use. You can't help but feel curious about what lies beyond the magical lake and wonder if sailing across might be an exciting adventure. With a sense of excitement, you contemplate whether to 'set sail' or to 'explore' the surrounding area further. What will you do next?", box);
            break;

        case "explore":
            addText("Well what else do you want to do?", box);
            break;
            
        case "set sail":
            addText("Feeling a sense of adventure, you grab the oars and begin to paddle across the magical lake. As you row further and further away from the shore and the dense forest. Suddenly, you feel a strong force moving the boat, and you realize that you're not alone on the lake. With a mix of excitement and fear, you wonder what could be causing the boat to move. Will you 'investigate' the cause or try to 'ignore it' and keep rowing?", box);
            break;
  
        // Sea monster
        case "investigate":
            addText("As you investigate the cause of the boat's sudden movement, you peer over the edge of the boat and see something moving in the water below. Suddenly, a giant sea monster leaps out of the water, revealing itself to you in all its terrifying glory. You feel a mix of fear and excitement as you face the beast. What will you do next? 'Attack' it or 'be nice' towards the sea monster", box);
            break;
            
        case "attack":
            addText("Without hesitation, you take out your wand and prepare to attack the sea monster. You cast a powerful spell, but it only seems to anger the beast further. The sea monster lashes out, attacking your boat and causing you to lose your balance. You fall into the water, desperately trying to keep your head above the surface. With the sea monster still attacking, you must think quickly if you hope to survive. You can try a 'new spell' or try and 'be nice'", box);
            break;

        case "new spell":
            addText("Determined to defend yourself, you try a different spell. With a powerful incantation, you successfully defeat the sea monster. However, as you see the lifeless body of the creature floating in the water, you can't help but feel a deep sense of remorse. You realize that the sea monster was just protecting its home, and you were the intruder. With a heavy heart, you continue your journey, knowing that you will never forget this encounter. 'keep rowing", box);
            break;

        case "keep rowing":
            addText("You reach the shore and notice a huge dark forest nearby, filled with the unknown and dangerous creatures. Strange sounds echo through the forest, making your heart race with fear. You know that you must tread carefully and be prepared for anything that might happen. You know you need to get home and the only way is 'through' the forest", box);
            break;
        
        case "be nice":
            addText("Instead of attacking the sea monster, you try to communicate with it. You speak softly and calmly, hoping to show the beast that you mean it no harm. To your surprise, the sea monster seems to respond to your words, slowing its attacks and watching you curiously. As you continue to speak, you begin to build a connection with the creature. Eventually, the sea monster becomes calm and even playful, allowing you to touch its scales and ride on its back. With your new friend by your side, the possibilities of your adventure seem endless. You can now choose to 'ride' on the sea monsters back or 'stay on boat'", box);
            break;

        case "ride":
            addText("You continue to speak calmly to the sea monster, and eventually, it allows you to ride on its back. With the sea monster as your guide, you make your way safely to the shore. You reach the shore and notice a huge dark forest nearby, filled with the unknown and dangerous creatures. Strange sounds echo through the forest, making your heart race with fear. You know that you must tread carefully and be prepared for anything that might happen. You know you need to get home and the only way is 'through' the forest", box);
            break;
            
        case "stay on boat":
            addText("You decide that you want to stay on the boat, but the sea monster has other plans. It seems to have taken a liking to you and decides to follow you to shore. You are amazed as you watch the creature swim alongside your boat, and you feel a newfound connection with the sea and its inhabitants. You reach the shore and notice a huge dark forest nearby, filled with the unknown and dangerous creatures. Strange sounds echo through the forest, making your heart race with fear. You know that you must tread carefully and be prepared for anything that might happen. You know you need to get home and the only way is 'through' the forest", box);
            break;

        // Reach the shore + 
        case "through":
            addText("You decide to venture into the dark forest, despite the ominous sounds and the eerie feeling that creeps up your spine. The trees tower above you, casting shadows that seem to move and dance in the flickering light. As you press forward, you come across a desolate graveyard. The gravestones are worn and weathered, and the air is thick with a sense of foreboding. Suddenly, you hear a loud growl coming from behind one of the gravestones. Do you 'look' or keep 'walking'?", box);
            break;
        
        case "look":
            addText("You decide to search the graveyard to find the thing making that growl. Just as you give up on your search, a ghoul emerges from behind the gravestone, its eyes glowing a bright red. It looks at you with blood lust. You can either 'fight' or 'run' ", box);
            break;

        case "walking":
            addText("You decide to keep walking. Just as your about to exit the graveyard, a ghoul emerges from behind the gravestone, its eyes glowing a bright red. It looks at you with blood lust. You can either 'fight' or 'run' ", box);
            break;

        case "fight":
            addText("The ghoul lunges at you with its claws, but you dodge out of the way and strike back with your sword. The ghoul is fast and strong, but you manage to fend it off with your quick reflexes and well-timed strikes. You have to strike 'again'", box);
            break;
        
        case "again":
            addText("You strike the ghoul again with all your might, but to your dismay, it seems to do very little damage. 'try again'", box);
            break;

        case "try again":
            addText("You strike the ghoul once more, this time with a spell. The ghoul lets out a loud shriek and collapses to the ground, defeated. You breathe a sigh of relief, but also feel a sense of sadness at the thought of taking another creature's life. As you look around, you notice that the graveyard is filled with similar creatures, and you realize that you will need to be careful as you continue your journey through this dark and dangerous forest. You have to 'keep going' now.", box);
            break;

        case "run":
            addText("As the ghoul charges towards you, you feel a sense of fear overwhelm you and you turn to run. Suddenly, you trip over a tree stump and tumble to the ground. You quickly scramble to your feet, but the ghoul is right on top of you. You close your eyes, expecting the worst, but then you hear a loud screech. You open your eyes and see that the ghoul has run into a large web spun between the trees. A giant spider descends from the web and attacks the ghoul, allowing you to escape. You continue running until you reach a clearing and catch your breath. You realize that you need to be more careful in this dangerous forest. You have to 'keep going' now.", box);
            break;

        case "keep going":
            addText("You keep walking through the forest scared of every sound until you reach a clearing. The sun shines down on you and the birds sing in the trees. You realize that you know the way home from here. You feel relieved and grateful to be out of the forest and on your way back to your village. THE END", box);
            break;
}}


// Få teksten frem
document.addEventListener("keydown", (e) => {
    switch(true) {
        case e.code.startsWith("Key"):
        case e.code === "Space":
            userInput.push(e.key);
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Backspace":
            userInput.pop();
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Enter":
            addText(userInput.join(""));
            whatToDo(userInput.join("").toLowerCase());
            userInput = [];
            inputField.innerHTL = "";
        break;
        default:
    }
})