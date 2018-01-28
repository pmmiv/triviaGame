var questions = [
	{	"name" : "numberOfChampionships",
		"question" : "How many championships have the Rockets won?",
		"answer" : "2",
		"option": ["2", "5", "1", "8"]
	},
	{	"name" : "firstChampionshipYear",
		"question" : "In what year did the Rockets win their first Championship?",
		"answer" : "1994",
		"option": ["1994", "1995", "1967", "1971"]
	},
	{	"name" : "notRockets",
		"question" : "Which NBA player has not played for the Rockets?",
		"answer" : "They have all played for the Rockets",
		"option": ["They have all played for the Rockets", "Hakeem Olajuwon", "Calvin Murphy", "Kyle Lowry"]
	},
	{	"name" : "tallestRockets",
		"question" : "Who is the tallest Rocket in history?",
		"answer" : "Yao Ming",
		"option": ["Yao Ming", "Hakeem Olajuwon", "Manute Bol", "Ralph Sampson"]
	},
	{	"name" : "tMac",
		"question" : "How many points did Tracy McGrady famously score in how many seconds at the end of a game?",
		"answer" : "13 points in 33 seconds",
		"option": ["13 points in 33 seconds", "9 points in 13 seconds", "3 points in .02 seconds", "20 points in 50 seconds"]
	},
	{	"name" : "bulletProof",
		"question" : "What Rocket was shot in the leg and played in a game 2 weeks later?",
		"answer" : "Carl Landry",
		"option": ["Carl Landry", "Patrick Beverly", "Charles Barkley", "Vernon Maxwell"]
	},
	{	"name" : "originalCity",
		"question" : "In what city were the Rockets founded?",
		"answer" : "San Diego",
		"option": ["San Diego", "Houston", "Orlando", "St. Louis"]
	},
	{	"name" : "winStreak",
		"question" : "Which player was the leading scorer during the Rockets' longest winning streak?",
		"answer" : "Yao Ming",
		"option": ["Yao Ming", "James Harden", "Hakeem Olajuwon", "Moses Malone"]
	},
]

	var time;
	var runn;
	var score = 0;
	var wrong = 0;
	var audio = new Audio("assets/sfx/buzzer.mp3");

	function run () {
		runn = setInterval(countdown, 1000);
	}

	function countdown () {
		if (time === 0){
			timesup();
			console.log(time);
		} else {
			time--
			$("#shotclock").text(time)
		}
	}

	function timesup () {
		audio.play();
		results();
	}

	function results () {
    	clearInterval(runn);
		// $(".box").css("display", "none");
    	// gather form data and see if the user submission was the correct answer
    	// 
    	// console.log($("#Original City"))
    	console.log($('input[name=choice]:checked', '#originalCity').val());
    	if ($('input[name=choice]:checked', '#originalCity').val() === "San Diego") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#tMac').val() === "13 points in 33 seconds") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#notRockets').val() === "They have all played for the Rockets") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#winStreak').val() === "Yao Ming") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#tallestRockets').val() === "Yao Ming") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#firstChampionshipYear').val() === "1994") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#numberOfChampionships').val() === "2") {
    		score++;
    	} else (
    		wrong++)
    	if ($('input[name=choice]:checked', '#bulletProof').val() === "Carl Landry") {
    		score++;
    	} else (
    		wrong++)
    	$("#questions").html("");
    	$("#head").html('<h1>Red Nation Trivia</h1><p>Click the button corresponding to the correct answer to each question. <br> You got <span id="right"></span> questions right and <span id="wrong"></span> questions wrong.</p><br><button id=reset>Reset</button>')
    	$("#right").text(score);
    	$("#wrong").text(wrong);
		$("#reset").click(initialize);
	}

	function shuffle(p) {
	  var currentIndex = p.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = p[currentIndex];
	    p[currentIndex] = p[randomIndex];
	    p[randomIndex] = temporaryValue;
	  }

	  return p;
	}
	function initialize () {
		// randomize question order
		questions = shuffle(questions);

		// Generating the questions
		for (i=0;i<questions.length;i++) {
			var questionBox = $("<form id='"+questions[i].name+"'>"+questions[i].question+"</form>");
			questionBox.addClass("box");
			questions[i].option = shuffle(questions[i].option)
			for (j=0;j<questions[i].option.length;j++) {
				$(questionBox).append("<br><input class='button' type='radio' name='choice' value='"+questions[i].option[j]+"'>"+questions[i].option[j])
				// console.log(questions[i].option[j]);
			}
			$("#questions").append(questionBox);		
		}
		$("#head").html('<h1>Red Nation Trivia</h1><p>Click the button corresponding to the correct answer to each question. <br> The shot clock is at: <span id="shotclock">60</span></p>')
		$("#questions").append("<button>Submit</button>")

		time = 60;
		score = 0;
		wrong = 0;
		run();
		$("button").click(results);

		
	}

$(document).ready(function(){

	initialize();

})
