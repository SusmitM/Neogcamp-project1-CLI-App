  var readlineSync= require('readline-sync');
  var score=0;
  var userName= readlineSync.question("HEY!!! Whats Your Name:) ");
  console.log("WELCOME "+userName+"!!!");

  function play(question,answer){
    var userAns= readlineSync.question(question);
    
    if(userAns.toUpperCase()===answer.toUpperCase()){
      console.log("Yes you are RIGHT!!!!");
      score = score + 1;

    }
    else{
      console.log("Sorry you are WRONG!!!");
      score = score - 1;
      
    }
    console.log("Your Current Score is: "+score);
    console.log("------------------------");

    console.log("Well Played!!!"+userName.toUpperCase()+" you scored "+score);
    
  }

  var Questions=[{
    questions:"Where do I live?? ",
    answer:"Kolkata",
  },
  {

    questions:"What is my fav food? ", 
    answer:"Momos",
    },
    {
    questions:"Whos is my fav football player? ",
    answer:"Messi",
  },
  {
    questions:"Whats my favourite movie? ",
    answer:"Tamasha",
  },
  {
    questions:"Which game helped me to survive the lockdown? ",
    answer:"Chess",
  },
  {questions:"Which is my dream destination to vist? ",
  answer:"North Korea",},
  {
    questions:"Do I have any siblings? ",
    answer:"No",
  },];

    

    for(var i=0;i<Questions.length;i++){
      var gameQues=Questions[i];
      play(gameQues.questions,gameQues.answer);
    }