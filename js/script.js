function submitAnswers() {
    var total = 5;

    var score = 0;

    //get user input
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;

    //validations
    
    for( var i = 1; i <= total; i++) {
        if(eval('q' + i) == null || eval('q' + i) == ''){
            alert('you missed question' + i);
           return false;
        }
    }

    //set correct answers

    var answers = ['b', 'a', 'd', 'b', 'd'];


    //check answers 

    for( var i = 1; i <= total; i++) {
        if(eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }


    //display answer
    var results = document.querySelector('#results');
    results.innerHTML = '<h3>You scored <span> '+score+'</span> out of '+total+'</span></h3>';
    
    return false;
}

