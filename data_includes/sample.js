//for G-maze
var shuffleSequence = seq("q_intro_prolificid",
	"evlab_intro_instructions",
	"q_intro_country", "q_intro_language", "q_intro_age",
	"intro-gram",
	"intro-practice", followEachWith("sep", "practice"),
	"end-practice",
	//Run ALL the items that start with "crit_item" in random order, separated by "sep"
	//followEachWith("sep", randomize(anyOf(startsWith("crit")))),
	followEachWith("sep", rshuffle("crit_item")),

	//"end-practice", followEachWith("sep",randomize(anyOf(startsWith("rel"),startsWith("and"), startsWith("adverb"), startsWith("filler")))),
	"end-experiment");

var showProgressBar = false;

var defaults = [
    //"Maze", {redo: true, rmess: "Incorrect. Please try again!", time: 0}, //uncomment to try "redo" mode old-style without delay
    //"Maze", {redo: true}, //uncomment to try Maze with new redo mode with a delay!
];
var items = [
	["q_intro_prolificid", "Question", {q:"Please enter your Prolific ID:"}],

	["evlab_intro_instructions", "Message", {html: "<p>You are participating in a study about language and related cognitive abilities being conducted by Professor Evelina Fedorenko from the Department of Brain and Cognitive Sciences at MIT. If you have questions or concerns, you can contact Professor Fedorenko by email (evelina9@mit.edu)</p><p>Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.\n</p><p>Please answer the background questions below. The only restriction to being paid is achieving the accuracy requirements as detailed below XXXXXXXXXXXX. Payment is NOT dependent on your answers to the following background questions on country and language.\n</p>"}],

	["q_intro_country", "Question", {q:"What country are you from?", as:["USA", "Canada", "UK", "Australia", "New Zealand", "India", "Other"], hasCorrect:0, randomOrder:false}],

	["q_intro_language", "Question", {q:"Is English your first language?", as:["Yes", "No"], hasCorrect:0, randomOrder:false}],

	["q_intro_age", "Question", {q:"What is your age bracket?", as:["18-24", "25-34", "35-49", "50-70", "70+"], hasCorrect:0, randomOrder:false}],

	["end-experiment", "Message", {html: "<p>End of experiment. Thank you for participating in this study!</p><p>Your completion code is: <b>XXXXXX</b></p><p>Please copy and paste this code into the Prolific survey to receive your payment.</p>"}],

	["intro-gram", "Message", {html: "<p>For this experiment, please place your left index finger on the 'e' key and your right index finger on the 'i' key.</p><p> You will read sentences word by word. On each screen you will see two options: one will be the next word in the sentence, and one will not. Select the word that continues the sentence by pressing 'e' (left-hand) for the word on the left or pressing 'i' (right-hand) for the word on the right.</p><p>Select the best word as quickly as you can, but without making too many errors.</p>"}],
	["intro-practice", "Message", {html: "The following items are for practice." }],
	["end-practice", "Message", {html: "End of practice. The experiment will begin next."}],
	["sep", "MazeSeparator", {normalMessage: "Correct! Press any key to continue", errorMessage: "Incorrect! Press any key to continue."}],
	["done", "Message", {html: "All done!"}],

	[["practice", 108], "Maze", {s:"The semester will start next week, but the students and teachers are not ready.", a:"x-x-x chivalry anti wages body sold, sin sky entitled sky concrete oil him goods."}],
	[["practice", 107], "Maze", {s:"The mother of the prisoner sent him packages that contained cookies and novels.", a:"x-x-x placed dry arm amounted rare nor rhythmic fund authority blossom me defect."}],
	//[["practice", 105], "Maze", {s:"The reporter had dinner yesterday with the baseball player who Kevin admired.", a:"x-x-x invested joy reduce organisms rise sum attained tended sin Troop flowing."}],
	//[["practice", 104], "Maze", {s:"The therapist set up a meeting with the upset woman and her husband yesterday.", a:"x-x-x socialism ten sit sum absence wave ran keeps exist dry sum settled remainder."}],

	[["crit_item", 1], "Maze", {s:"Kim will display the photos she took next month, but she won't show all of them.", a:"x-x-x milk dealing sit compel eat thin poem older, us thy scale soft ran eat soon."}],
	[["crit_item", 2], "Maze", {s:"Greta will display the photos she took last month, but she won't show all of them.", a:"x-x-x milk dealing sit compel eat thin poem older, us thy scale soft ran eat soon."}],
	[["crit_item", 3], "Maze", {s:"Kim will display the photos she took next month, but she won't show all of them.", a:"x-x-x milk dealing sit compel eat thin poem older, us thy scale soft ran eat soon."}],

];
