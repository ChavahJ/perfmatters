/*
Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
*/

// As you may have realized, this website randomly generates Tea Parties.
// Here are arrays of all possible Tea Party INGREDIENTS.
var teaPartyIngredients = {};
teaPartyIngredients.tea = [
  "Earl Grey Tea",
  "Darjeeling Tea",
  "Red Tea",
  "White Tea",
  "Oolang Tea",
  "Strong Black Tea",
  "Weak Black Tea",
  "Black Dragon Tea",
  "Keemun Tea",
  "Yunnan Tea",
  "Pu'er Tea",
  "Ginseng Tisane",
  "Chamomile Tisane ",
  "Lemon Verbana",
  "Ginger Tisane",
  "Mint Tea",
  "Ginkgo Root Tisane",
  "Biloba Tisane",
  "Rooibos Tea",
  "Rosehip Tisane",
  "Hibiscus Tisane",
  "Fennel Tisane",
  "Dandelion Tisane",
  "Elderberry Tisane",
  "Fennel Tisane",
  "Sassafras Tisane",
  "Turmeric Tisane",
  "Raspberry Leaf Tea",
  "Pennyroyal Tea",
  "Poppy Tisane",
  "Nettle Tisane",
  "Licorice Root Tea",
  "Hot Apple Cider",
  "Hot Chocolate",
  "Hot Milk",
  "Horehound Tisane"
];
teaPartyIngredients.cake = [
  "White Cake",
  "Red Velvet Cake",
  "Chocolate Cake",
  "Lemon Poppyseed Cake",
  "Coconut Cake",
  "Banana Walnut Cake",
  "Strawberry Cream Cake",
  "Chocolate Chip Cookies",
  "Cream Cake",
  "Coffee Cake",
  "Crumble Cake",
  "Apple Crumble Cake",
  "Pineapple Upsidedown Cake",
  "Pear Cake",
  "Apple Crumble",
  "Brownies",
  "Ice Cream Cake",
  "Banana Cream Pie",
  "Petit Four",
  "Lemon Cream Pie",
  "Apple Pie",
  "Volcano Mousse",
  "Truffles",
  "Classic Trifle",
  "Vanilla Cream Cake",
  "Chocolate Walnut Cake",
  "Pecan Pie",
  "Apple Walnut Cake",
  "Sugar Cookies",
  "Caramel Cream Cake"
];
teaPartyIngredients.sandwichInside = [
  "American Cheese",
  "Swiss Cheese",
  "Cucumbers",
  "Mozzarella Cheese",
  "Humous",
  "Sun Dried Tomatoes",
  "Gouda Cheese",
  "Muenster Cheese",
  "Avocado",
  "Tomatoes",
  "Fried Egg",
  "Zucchini",
  "Tuna",
  "Brie Cheese",
  "Cheddar Cheese",
  "Roast Garlic",
  "Guacamole",
  "Jack Cheese",
  "Sliced Avocado",
  "Tahina",
  "Olive Spread",
  "Smoked Salmon",
  "Lettuce",
  "Cream Cheese",
  "Provolone Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Roasted Eggplant",
  "Smoked Gouda"
];
teaPartyIngredients.condiment = [
  "Mayonnaise",
  "Ketchup",
  "Mustard",
  "Pesto",
  "Butter",
  "Margarine",
  "Honey"
];
teaPartyIngredients.bread = [
  "White Bread",
  "White Rolls",
  "Whole Wheat Bread",
  "Rye Bread",
  "Flat Bread",
  "Gluten-Free Rolls",
  "Spelt Rolls"
];

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Pulls adjective out of a two dimensional array using random number sent from generator
function getAdj(x){
  switch(x) {
    case "dark":
      var dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
      "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
      "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
      return dark;
    case "color":
      var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
      "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
      "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
      "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
      return colors;
    case "whimsical":
      var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
      "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
      "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
      "brainwashed"];
      return whimsy;
    case "shiny":
      var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
      "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
      "metallic"];
      return shiny;
    case "noisy":
      var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
      "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
      "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
      "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
      return noisy;
    case "apocalyptic":
      var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
      "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
      "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
      return apocalyptic;
    case "insulting":
      var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
      "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
      "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
      "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
      "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
      "horrible", "syncophantic", "unhelpful", "bootlicking"];
      return insulting;
    case "praise":
      var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
      "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
      "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
      "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
      "majestic", "grand", "stunning"];
      return praise;
    case "scientific":
      var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
      return scientific;
    default:
      var scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
      return scientific_default;
  }
}

// Pulls noun out of a two dimensional array using random number sent from generator
function getNoun(y) {
  switch(y) {
    case "animals":
      var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
      "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
      "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
      "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
      "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
      "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
      "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
      return animals;
    case "profession":
      var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
      "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
      "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
      "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
      return professions;
    case "fantasy":
      var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
      "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
      "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
      return fantasy;
    case "music":
      var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
      "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
      "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
      "singer"];
      return music;
    case "horror":
      var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
      "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
      "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
      "fiend", "satanist", "moon", "fullMoon"];
      return horror;
    case "gross":
      var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
      "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
      "fluid", "moisture", "garbage", "trash", "bug"];
      return gross;
    case "everyday":
      var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
      "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
      "garden", "school", "wallet", "bottle"];
      return everyday;
    case "jewelry":
      var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
      "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
      "costume", "ornament", "treasure"];
      return jewelry;
    case "places":
      var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
      "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
      "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
      return places;
    case "scifi":
      var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return scifi;
    default:
      var scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return scifi_default;
  }
}

var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];  // types of adjectives for tea party titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];                        // types of nouns for tea party titles

// Generates random numbers for getAdj and getNoun functions and returns a new tea party NAME
function generator(adj, noun) {
  var adjectives = getAdj(adj);
  var nouns = getNoun(noun);
  var randomAdjective = parseInt(Math.random() * adjectives.length);
  var randomNoun = parseInt(Math.random() * nouns.length);
  var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
  return name;
}

// Chooses random adjective and random noun
function randomName() {
  var randomNumberAdj = parseInt(Math.random() * adjectives.length);
  var randomNumberNoun = parseInt(Math.random() * nouns.length);
  return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

// These functions return a string of a random ingredients from each respective category of INGREDIENTS.
var selectRandomTea = function() {
  var randomTea = teaPartyIngredients.tea[Math.floor((Math.random() * teaPartyIngredients.tea.length))];
  return randomTea;
};

var selectRandomCake = function() {
  var randomCake = teaPartyIngredients.cake[Math.floor((Math.random() * teaPartyIngredients.cake.length))];
  return randomCake;
};

var selectRandomSandwichInside = function() {
  var randomSandwichInside = teaPartyIngredients.sandwichInside[Math.floor((Math.random() * teaPartyIngredients.sandwichInside.length))];
  return randomSandwichInside;
};

var selectRandomCondiment = function() {
  var randomCondiment = teaPartyIngredients.condiment[Math.floor((Math.random() * teaPartyIngredients.condiment.length))];
  return randomCondiment;
};

var selectRandomBread = function() {
  var randomBread = teaPartyIngredients.bread[Math.floor((Math.random() * teaPartyIngredients.bread.length))];
  return randomBread;
};

var ingredientItemizer = function(string) {
  return "<li>" + string + "</li>";
};

// Returns a string with randomTeaParty ingredients nested inside <li> tags
var makeRandomTeaParty = function() {
  var teaParty = "";

  var numberOfTeas = Math.floor((Math.random() * 2) + 1); //Generates 1-2 teas per party
  var numberOfCakes = Math.floor((Math.random() * 3)); //Generates 0-3 cakes per party
  var numberOfInsides = Math.floor((Math.random() * 4) + 1); //Generates 1-4 sandwich ingredients per party

  for (var i = 0; i < numberOfTeas; i++) {
    teaParty = teaParty + ingredientItemizer(selectRandomTea());
  }

  for (var j = 0; j < numberOfCakes; j++) {
    teaParty = teaParty + ingredientItemizer(selectRandomCake());
  }

  for (var k = 0; k < numberOfInsides; k++) {
    teaParty = teaParty + ingredientItemizer(selectRandomSandwichInside());
  }

  teaParty = teaParty + ingredientItemizer(selectRandomCondiment()); //picks one random condiment per party
  teaParty = teaParty + ingredientItemizer(selectRandomBread()); //picks one randome type of bread for the sandwiches of the party

  return teaParty;
};

// returns a DOM element for each TeaParty
var teaPartyElementGenerator = function(i) {
  var teaPartyContainer,             // creates a DIV to contain all the information about a single tea party
      teaPartyImageContainer,        // creates a DIV for the tea pot IMG
      teaPartyImage,                 // the tea pot IMG
      teaPartyDescriptionContainer,  // creates a DIV for the TITLE and INGREDIENTS
      teaPartyName,                  // the tea party TITLE
      ul;                           // the list of tea party INGREDIENTS

  teaPartyContainer  = document.createElement("div");
  teaPartyImageContainer = document.createElement("div");
  teaPartyImage = document.createElement("img");
  teaPartyDescriptionContainer = document.createElement("div");

  teaPartyContainer.classList.add("randomTeaPartyContainer");
  teaPartyContainer.id = "teaParty" + i;                // gives each tea party element a unique id
  teaPartyImageContainer.classList.add("col-md-6"); //makes the image take up half the width of the tea party container itself

  teaPartyImage.src = "img/red-tea-pot-r.png";
  teaPartyImage.classList.add("img-tea"); //ensures the image is responsive for different devices and viewports
  teaPartyImageContainer.appendChild(teaPartyImage); //appends the image to the IMG div created above
  teaPartyContainer.appendChild(teaPartyImageContainer); //appends the IMG div to the tea party container div

  teaPartyDescriptionContainer.classList.add("col-md-6"); //makes the tea party description take up half the width of the tea party container

  teaPartyName = document.createElement("h3"); //adds an h4 tag to contain the title of the tea party
  teaPartyName.innerHTML = randomName(); //Invoking the function for creating a random name from the arrays adjectives and nouns
  teaPartyDescriptionContainer.appendChild(teaPartyName); //appends the tea party name to the description container

  ul = document.createElement("ul"); //creating an unordered list for the ingredients
  ul.innerHTML = makeRandomTeaParty(); //Invoking the function to generate a list of ingredients
  teaPartyDescriptionContainer.appendChild(ul); //appending the list items to the unordered list
  teaPartyContainer.appendChild(teaPartyDescriptionContainer); //appending the entire list to the description container

  return teaPartyContainer; //generates the container DIV with all of its content and img
};

//START RESIZING OF TEA PARTIES
// resizeTeaParty(size) is called when the slider in the "Our Tea Parties" section of the website moves.
var resizeTeaParty = function(size) {
  window.performance.mark("mark_start_resize");   // User Timing API function

  // Changes the value for the size of the Tea Party above the slider
  function changeSliderLabel(size) {
    switch(size) {
        case "1":
        document.querySelector("#teaPartySize").innerHTML = "Small (1-2 Participants)";
        return;
        case "2":
        document.querySelector("#teaPartySize").innerHTML = "Medium (3-4 Participants)";
        return;
        case "3":
        document.querySelector("#teaPartySize").innerHTML = "Large (5-6 Participants)";
        return;
      default:
        console.log("bug in changeSliderLabel");
    }
  }

  changeSliderLabel(size);

   // Returns the size difference to change a TeaParty element from one size to another. Called by changeTeaPartySlices(size).
  function determineDx (elem, size) {
    var oldWidth = elem.offsetWidth;
    var windowWidth = document.querySelector("#randomTeaParty").offsetWidth;
    var oldSize = oldWidth / windowWidth;

    // Changes the slider value to a percent width
    function sizeSwitcher (size) {
      switch(size) {
        case "1":
            return 0.25;
        case "2":
            return 0.3333;
        case "3":
            return 0.5;
        default:
          console.log("bug in sizeSwitcher");
      }
    }

    var newSize = sizeSwitcher(size);
    var dx = (newSize - oldSize) * windowWidth;

    return dx;
  }

  var teaPartyContainer = document.querySelectorAll(".randomTeaPartyContainer");
  var teaPartyContainerLength = teaPartyContainer.length;

   // Iterates through tea party divs on the page and changes their widths
    function changeTeaPartySizes(size) {
        var dx = determineDx(teaPartyContainer[0], size) //moving variables out of the loop
        var newwidth = (teaPartyContainer[0].offsetWidth + dx) + 'px';      // the width of the container is set
     for (var i = 0; i < teaPartyContainer.length; i++) {
       teaPartyContainer[i].style.width = newwidth;
     }
   }

   changeTeaPartySizes(size);

  // User Timing API is awesome
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_tea-party_resize", "mark_start_resize", "mark_end_resize");
  var timeToResize = window.performance.getEntriesByName("measure_tea-party_resize");
  console.log("Time to resize tea-party: " + timeToResize[0].duration + "ms");
};

//START OF TEA PARTY GENERATOR
// window.performance.mark("mark_start_generating"); // collect timing data when tea parties are loading

// This for-loop actually CREATES and APPENDS all of the Tea Parties when the page loads
for (var i = 3; i < 100; i++) {
  var teaPartyDiv = document.getElementById("randomTeaParty");
  teaPartyDiv.appendChild(teaPartyElementGenerator(i));
}

// User Timing API again. These measurements tell you how long it took to generate the initial TeaPartys
// window.performance.mark("mark_end_generating");
// window.performance.measure("measure_tea-party_generation", "mark_start_generating", "mark_end_generating");
// var timeToGenerate = window.performance.getEntriesByName("measure_tea-party_generation");
// console.log("Time to generate tea parties on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the Tea Pots in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background TeaPartys on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
    var numberOfEntries = times.length;
    var sum = 0;
    for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
    }

    console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

function updatePositions() {
    var heavyScroll = !!document.querySelector('#movingTeapots1').checked;
    var items = document.querySelectorAll('.mover');
    var cachedScrollTop = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase;
        if (heavyScroll)
            phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        else
            phase = Math.sin((cachedScrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
}

window.addEventListener('scroll', updatePositions);
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 200; i++) {
        var el = document.createElement('img');
        el.className = 'mover';
        el.src = "img/red-tea-pot.png";
        el.basicLeft = (i % cols) * s;
        el.style.top = (Math.floor(i / cols) * s) + 'px';
        document.body.appendChild(el);
    }

    updatePositions();
});


// The following code for sliding background TeaPartys was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html
// MOVES the sliding background TeaPartys based on scroll position

// var scrolling = false;
// var scrollPosition = 0;
// function startScrolling() {
//     scrollPosition =  window.scrollY;
//     if (!scrolling) {
//         requestAnimationFrame(updatePositions);
//     }
//     scrolling = true;
// }


// function updatePositions() {
//     scrolling = false;
//     frame++; //increases the frame variable as defined above
//     window.performance.mark("mark_start_frame"); //telling Timing API where to start measuring
//     var items = document.getElementsByClassName('mover');
//     var moverLength = items.length;
//     var scrollTop = document.body.scrollTop;
//     var scrollPhase = scrollTop / 1250;

//     for (var i = 0; i < moverLength; i++) {
//         var phase = Math.sin(scrollPhase + (i % 5));
//         items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
//   }

//   // User Timing API to the rescue again. Seriously, it's worth learning.
//   // Super easy to create custom metrics.
//   //Is he getting paid to plug this API? Seriously.
//   window.performance.mark("mark_end_frame");
//   window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
//   if (frame % 10 === 0) {
//     var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
//     logAverageFrame(timesToUpdatePosition);
//   }
// }

// // runs updatePositions on scroll
// window.addEventListener('scroll', startScrolling);

// // Generates the sliding pizzas when the page loads.
// document.addEventListener('DOMContentLoaded', function() {

//   var cols = 8;
//   var s = 256;
//   var viewportHeight = window.innerHeight;
//   var pizzasAppend = document.getElementById("movingTeapots1");

//   var rows = Math.floor(viewportHeight / 256) + 1;
//   var backgroundTeaPots = cols * rows;
//   var elem;

//   for (var i = 0; i < backgroundTeaPots; i++) {
//     elem = document.createElement('img');
//     elem.className = 'mover';
//     elem.src = "img/red-tea-pot.png";
//     elem.style.height = "100px";
//     elem.style.width = "73.333px";
//     elem.basicLeft = (i % cols) * s + 'px';
//     elem.style.top = (Math.floor(i / cols) * s) + 'px';
//     pizzasAppend.appendChild(elem);
//   }
//   updatePositions();
// });

// // Generates the sliding pizzas when the page loads.
// document.addEventListener('DOMContentLoaded', function() {
//   var cols = 8;
//   var s = 256;
//   for (var i = 0; i < 100; i++) {
//     var elem = document.createElement('img');
//     elem.className = 'mover';
//     elem.src = "img/red-tea-pot.png";
//     elem.basicLeft = (i % cols) * s;
//     elem.style.top = (Math.floor(i / cols) * s) + 'px';
//     document.querySelector("#movingTeapots1").appendChild(elem);
//   }
//   updatePositions();
// });

// // Generates the sliding Tea Pots when the page loads.
// document.addEventListener('DOMContentLoaded', function() {
//     var teaPotSpan;
//     var teaPotImg;
//     var cols = 8;
//     var s = 256;
//     for (var i = 0; i < 100; i++) {
//         teaPotSpan = document.createElement("span");
//         teaPotImg = document.createElement('img');
//         teaPotSpan.className = 'mover';
//         teaPotSpan.basicLeft = (i % cols) * s;
//         teaPotSpan.style.top = (Math.floor(i / cols) * s) + 'px';
//         teaPotImg.src = "img/red-tea-pot.png";
//         teaPotSpan.appendChild(teaPotImg);
//         document.querySelector("#movingTeapots1").appendChild(teaPotSpan);
//   }
//   updatePositions();
//   console.log("I am updating positions.")
// });
