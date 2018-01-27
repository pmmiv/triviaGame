var questions = [
	{	"name" : "Number of Championships",
		"question" : "How many championships have the Rockets won?",
		"answer" : "2",
		"option": ["2", "5", "1", "8"]
	},
	{	"name" : "First Championship Year",
		"question" : "In what year did the Rockets win their first Championship?",
		"answer" : "1994",
		"option": ["1994", "1995", "1967", "1971"]
	},
	{	"name" : "Not Rockets",
		"question" : "Which NBA player has not played for the Rockets?",
		"answer" : "They have all played for the Rockets",
		"option": ["They have all played for the Rockets", "Hakeem Olajuwon", "Calvin Murphy", "Kyle Lowry"]
	},
	{	"name" : "Tallest Rockets",
		"question" : "Who is the tallest Rocket in history?",
		"answer" : "Yao Ming",
		"option": ["Yao Ming", "Hakeem Olajuwon", "Manute Bol", "Ralph Sampson"]
	},
	{	"name" : "TMac",
		"question" : "How many points did Tracy McGrady famously score in how many seconds at the end of a game?",
		"answer" : "13 points in 33 seconds",
		"option": ["13 points in 33 seconds", "9 points in 13 seconds", "3 points in .02 seconds", "20 points in 50 seconds"]
	},
	{	"name" : "Bullet Proof",
		"question" : "What Rocket was shot in the leg and played in a game 2 weeks later?",
		"answer" : "Carl Landry",
		"option": ["Carl Landry", "Patrick Beverly", "Charles Barkley", "Vernon Maxwell"]
	},
	{	"name" : "Orignal City",
		"question" : "In what city were the Rockets founded?",
		"answer" : "San Diego",
		"option": ["San Diego", "Houston", "Orlando", "St. Louis"]
	},
	{	"name" : "Win Streak",
		"question" : "Which player was the leading scorer during the Rockets' longest winning streak?",
		"answer" : "Yao Ming",
		"option": ["Yao Ming", "James Harden", "Hakeem Olajuwon", "Moses Malone"]
	},
]

var time = 60;

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	function run () {
		setInterval(countdown, 1000)		
	}

	function countdown () {
		time--
		$("shotclock").text(time)
	}

// randomize question order and options


// Generating the questions
$(document).ready(function(){
	for (i=0;i<questions.length;i++) {
		var questionBox = $("<form id='"+questions[i].name+"'>"+questions[i].question+"<br></form>");
		questionBox.addClass("box");
		for (j=0;j<questions[i].option.length;j++) {
			$(questionBox).append("<input type='radio' name='choice' value='"+questions[i].option[j]+"'>"+questions[i].option[j])
			console.log(questions[i].option[j]);
		}
		$("#questions").append(questionBox);		
	}
	$("#questions").append("<button>Submit</button>")

})
