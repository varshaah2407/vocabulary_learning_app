import React, { useEffect, useState } from "react";
import './QuizSummary.css';
import { useLocation } from "react-router-dom";

function QuizSummary() {
  const location = useLocation();
  const [quizSummary, setQuizSummary] = useState({
    score: 0,
    numberofQuestion: 0,
    numberofAnsweredQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    console.log(location.search);

    if (location && location.search) {
      const queryParams = new URLSearchParams(location.search);

      const score = queryParams.get("score");
      const numberofQuestions = queryParams.get("numberofQuestions");
      const numberofAnsweredQuestions = queryParams.get("numberofAnsweredQuestions");
      const correctAnswers = queryParams.get("correctAnswers");
      const wrongAnswers = queryParams.get("wrongAnswers");

      console.log({
        score,
        numberofQuestions,
        numberofAnsweredQuestions,
        correctAnswers,
        wrongAnswers,
      });

      setQuizSummary({
        score: Math.round((score / numberofQuestions) * 100),
        numberofQuestion: numberofQuestions,
        numberofAnsweredQuestion: numberofAnsweredQuestions,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
      });
    }
  }, [location]);

  return (
    <div>
      <h1>Hello from quiz area</h1>
      <p>Score: {quizSummary.score}%</p>
      <p>Total Questions: {quizSummary.numberofQuestion}</p>
      <p>Answered Questions: {quizSummary.numberofAnsweredQuestion}</p>
      <p>Correct Answers: {quizSummary.correctAnswers}</p>
      <p>Wrong Answers: {quizSummary.wrongAnswers}</p>
    </div>
  );
}

export default QuizSummary;
