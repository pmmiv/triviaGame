// array of 2 point questions
	// questions should be objects with a name, question, answer, 3 wrong responses point value
var twoPointQs = [
	{	"name" : "Number of Championships",
		"question" : "How many championships have the Rockets won?",
		"value" : 2,
		"answer" : "2",
		"wrong": ["5", "1", "8"]
	},
	{	"name" : "First Championship Year",
		"question" : "In what year did the Rockets win their first Championship?",
		"value" : 2,
		"answer" : "1994",
		"wrong": ["1995", "1967", "1971"]
	},
	{	"name" : "Not Rockets",
		"question" : "Which player has not played for the Rockets",
		"value" : 2,
		"answer" : "They have all played for the Rockets",
		"wrong": ["Hakeem Olajuwon", "Calvin Murphy", "Kyle Lowry"]
	}
]
var threePointQs = [
	{	"name" : "",
		"question" : "",
		"value" : 3,
		"answer" : "",
		"wrong": ["", "", ""]
	}
]

console.log(twoPointQs[2].wrong[0]);

// array of 3 point questions

// array of 1 point questions

// player score
// visitor score
// gameState = false

// function nextquestion () {}

// if 3 pt questions.length = 0
	// ask a 2 pt question

// if 2 pt questions.length = 0
	// ask a 3 pt question

// else var valueDec = Math.floor(Math.random() * 2)
	// if valueDec  < 1 {
		// ask a 3 pt question
	// } else {
		// ask a 2 point question
	// }

	// question function
	// if user selection = obj.correctAnswer {
		// if (drawFoul) {
			// award points
			// ask a 1 point question
		// } else {
			// awardpoints
			// nextquestion
		// }
	// }
		// else {
			// awardvisitor points
	// }