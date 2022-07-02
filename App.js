import  { useState } from "react";
import "./App.css";

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Inside which HTML element do we put the JavaScript?",
      options: [
        {id:0, text: 'The <body> section', isCorrect: false},
      {id:1, text: 'Both the <head> section and the <body> section are correct', isCorrect: true},
      {id:2, text: 'The <head> section', isCorrect: false},
      {id:3, text: 'The <html> section', isCorrect: false},
      ],
    },
    {
      text: "Where is the correct place to insert a JavaScript?",
      options: [
        {id:0, text: '<script>', isCorrect: true},
        {id:1, text: '<js>', isCorrect: false},
        {id:2, text: 'scripting', isCorrect: false},
        {id:3, text: 'javascript', isCorrect: false},
      ],
    },
    {
      text: "How do you write 'Hello World' in an alert box?",
      options: [
        {id:0, text: 'alert("Hello World")', isCorrect: true},
        {id:1, text: 'alertBox("Hello World")', isCorrect:false},
        {id:2, text: 'msg("Hello World")', isCorrect: false},
        {id:3, text: 'msgBox("Hello World")', isCorrect: false},
      ],
    },
    {
      text: "How do you create a function in JavaScript?",
      options: [
        {id:0, text: 'function = myFunction()', isCorrect: false},
        {id:1, text: 'function:myFunction()', isCorrect:false},
        {id:2, text: 'function myFunction() ', isCorrect: true},
        {id:3, text: 'function my()Function', isCorrect: false},
      ],
    },
    {
      text: 'How do you call a function named "myFunction"?',
      options: [
        {id:0,text: 'callmyFunction()', isCorrect: false},
        {id:1, text: 'myFunction()', isCorrect: true},
        {id:2, text: 'call function myFunction()', isCorrect: false},
        {id:3, text: 'callfunctionmyFunction()', isCorrect: false},
      ],
    },

    {
      text: 'How to write an IF statement in JavaScript?',
      options: [
      {id:0, text: 'if(i == 5)', isCorrect: true},
      {id:1, text: 'if i = 5 then', isCorrect: false},
      {id:2, text: 'if i = 5', isCorrect: false},
      {id:3, text: 'if i == 5 then', isCorrect: false},
      ],
    },

    {
      text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      options: [
      {id:0, text: 'if i =! 5 then', isCorrect: false},
      {id:1, text: 'if i <> 5', isCorrect: false},
      {id:2, text: 'if (i != 5)', isCorrect: true},
      {id:3, text: 'if (i <> 5)', isCorrect: false},
      ],
    },

    {
      text: 'What is the correct way to write a JavaScript array?',
      options: [
      {id:0, text: 'var colors = (1:"red", 2:"green", 3:"blue")', isCorrect: false},
      {id:1, text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', isCorrect: false},
      {id:2, text: 'var colors = "red", "green", "blue"', isCorrect: false},
      {id:3, text: 'var colors = ["red", "green", "blue"]  ', isCorrect: true},
      ],
    },

    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      options: [
      {id:0, text: 'Math.round(7.25)  ', isCorrect: true},
      {id:1, text: 'Math.rnd(7.25)', isCorrect: false},
      {id:2,text: 'round(7.25)', isCorrect: false},
      {id:3, text: 'rnd(7.25)', isCorrect: false},
      ],
    },
  
  
  {
      text: 'Which operator is used to assign a value to a variable?',
      options: [
      {id:0, text: 'x  ', isCorrect: false},
      {id:1, text: '-', isCorrect: false},
      {id:2, text: '=', isCorrect: true},
      {id:3, text: '*', isCorrect: false},
      ],
    },
  
  ];
  
 
  const optionClicked = (isCorrect) => {
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

 
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      
      <h1>Quiz App</h1>

      
      <h2>Score: {score}</h2>

      {showResults ? (
       
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Again</button>
        </div>
      ) : (
        
        <div className="question-card">
         
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

         
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;