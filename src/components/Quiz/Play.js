import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import M from 'materialize-css'
import sound from '../../assests/sounds/correct.wav'

import questionsdb from "../../db.json";
import { useNavigate } from "react-router-dom";

const Play = () => {
  let questions = questionsdb;
  let [currentQuestion, setcurrentQuestion] = useState({});
  let [nextQuestion, setNextQuestion] = useState({});
  let [previousQuestion, setPreviousQuestion] = useState({});
  let [answer, setAnswer] = useState("");
  let [numberOfQuestions, setNumberOfQuestions] = useState(0);
  let [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(0);
  let [wrongAnswers, setWrongAnswers] = useState(0);
  let [hints, setHints] = useState(5);
  let [fiftyfifty, setFiftyfifty] = useState(5);
  let [fiftyfiftyUsed, setFiftyfiftyUsed] = useState(false);
  let [time, setTime] = useState({});;
  let navigate = useNavigate();

  function isEmpty(value) {
    return (
      value === undefined ||
      value == null ||
      (typeof value == "object" && Object.keys(value).length === 0) ||
      (typeof value == "string" && value.trim().length === 0)
    );
  }

  let displayQuestions = () => {
    if (!isEmpty(questions)) {
      
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex + 1];
      const answer = currentQuestion.answer;

      setNumberOfQuestions(questions.length);
      setcurrentQuestion(currentQuestion);
      setNextQuestion(nextQuestion);
      setPreviousQuestion(previousQuestion);
      setAnswer(answer);
    }
  };

  useEffect(() => {
    displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
      currentQuestionIndex
    );
  },[currentQuestionIndex]);

  let handleOptionClick = (e)=>{
    if(e.target.textContent.toLowerCase() === answer.toLowerCase()){
      setTimeout(()=>{document.getElementById('sound').play()},500)
      M.toast({
        html: "Correct Answer",
        classes: 'toast-valid',
        displayLength: 1500
      })

      // Set Questions State
      setScore(score+1);
      setCorrectAnswers(correctAnswers+1);
      

    }else{
      //navigator.vibrate(1000);
      M.toast({
        html: "Wrong Answer",
        classes: 'toast-invalid',
        displayLength: 1500
      })

      // Set Questions State
      setWrongAnswers(wrongAnswers+1)
      
    }
    setNumberOfAnsweredQuestions(numberOfAnsweredQuestions+1);
    if (currentQuestionIndex !== numberOfQuestions-1) {
      setCurrentQuestionIndex(currentQuestionIndex+1);
    }else{
      handleQuitButtonClick();
    }
    
  }

  let handlePrevButtonClick = ()=>{
      // Set Questions State
      if (currentQuestionIndex !== 0) {
        setScore(score-1);
        setCurrentQuestionIndex(currentQuestionIndex-1);
        setNumberOfAnsweredQuestions(numberOfAnsweredQuestions-1);
      }
}

let handleNextButtonClick = ()=>{
  // Set Questions State
  if (currentQuestionIndex !== numberOfQuestions-1) {
    setCurrentQuestionIndex(currentQuestionIndex+1);
  }
}

let handleQuitButtonClick = ()=>{
    M.toast({
      html: "Finished",
      classes: 'toast-invalid',
      displayLength: 1500
    })
    navigate('/')
}

let handleFiftyfifty = () =>{
  if (fiftyfifty !== 0 && !fiftyfiftyUsed) {
    M.toast({
      html: "Fifty Fifty Used",
      classes: 'toast-invalid',
      displayLength: 1500
    })

    setFiftyfiftyUsed(true)
    setFiftyfifty(fiftyfifty-1)
  }
}

let handleHints = () =>{
  if (fiftyfifty !== 0 && !fiftyfiftyUsed) {
    M.toast({
      html: "Fifty Fifty Used",
      classes: 'toast-invalid',
      displayLength: 1500
    })

    setFiftyfiftyUsed(true)
    setFiftyfifty(fiftyfifty-1)
  }
}

  return (
    <>
      <Helmet>
        <title>Quiz Page</title>
      </Helmet>
        <>
          <audio id="sound" src={sound}/>
        </>
      <div className="questions">
        <h2> Free Quiz Page</h2>
        <div className="lifeline-container">
          <p onClick={handleFiftyfifty}>
            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
            {fiftyfifty}
          </p>
          <p onClick={handleHints}>
            <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
            {hints}
          </p>
        </div>
        <div className="lifeline-container">
          <p>{currentQuestionIndex + 1} of {numberOfQuestions}</p>
          <p>
            2:15
            <span className="mdi mdi-clock-outline mdi-24px"></span>
          </p>
        </div>
        <h5>{currentQuestion.question}</h5>
        <div className="options-container">
          <p onClick={handleOptionClick} className="option">{currentQuestion.optionA}</p>
          <p onClick={handleOptionClick} className="option">{currentQuestion.optionB}</p>
        </div>
        <div className="options-container">
          <p onClick={handleOptionClick} className="option">{currentQuestion.optionC}</p>
          <p onClick={handleOptionClick} className="option">{currentQuestion.optionD}</p>
        </div>

        <div className="button-container">
          <button onClick={handlePrevButtonClick}>Previous</button>
          <button onClick={handleNextButtonClick}>Next</button>
          <button onClick={handleQuitButtonClick}>Quit</button>
        </div>
      </div>
    </>
  );
};

export default Play;
