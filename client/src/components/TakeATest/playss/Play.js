import React,{Component, Fragment, state} from "react";
import "../Play.css"
import questions from '../questions.json'
import isEmpty from "../utils/is-empty";
import M from 'materialize-css';



class Play extends Component{

 constructor(props)
  {

    super(props);
    this.state={
      questions,
      currentQuestion:{},
      nextQuestion:{},
      previousQuestion:{},
      answer:'',
      numberofQuestions:15,
      numberofAnsweredQuestions:0,
      currentQuestionIndex:0,
      score:0,
      correctAnswers:0,
      wrongAnswers:0,
    };
  }

  componentDidMount(){
    const {questions,currentQuestion,nextQuestion,previousQuestion}=this.state
    this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
  }
  
  displayQuestions=(questions=this.state.questions, currentQuestion,nextQuestion,previousQuestion)=>{
    let{currentQuestionIndex}=this.state;
    if(!isEmpty(this.state.questions))
    {
        questions=this.state.questions;
        currentQuestion=questions[currentQuestionIndex];
        nextQuestion=questions[currentQuestionIndex+1];
        previousQuestion=questions[currentQuestionIndex-1];
        const answer=currentQuestion.answer;
        this.setState({
          currentQuestion,
          nextQuestion,
          previousQuestion,
          answer
        });
    }
   };
   
   handleNextButtonCLick=()=>{
    if(this.state.nextQuestion!== undefined)
    {
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex+1
      }),()=>{
        this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
      });
    }
   };

   handlePreviousButtonCLick=()=>{
    if(this.state.previousQuestion!== undefined)
    {
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex-1
      }),()=>{
        this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
      });
    }
   };

   handleOptionClick =(e)=>{
      if(e.target.innerHTML.toLowerCase()===this.state.answer.toLowerCase())
      {
        console.log("correct");
        this.correctAnswer();
      }else
      {
        console.log("wrong");
        this.wrongAnswer();
      }
   }

   handleButtonClick=(e)=>{
    switch(e.target.id)
    {
      case 'next-button':
        this.handleNextButtonCLick();
        break;
      
      case 'previous-button':
        this.handlePreviousButtonCLick();
        break;
      
      default:
        break;
    }
   }

   correctAnswer =()=>{
    console.log("correct");
    M.toast({
      html:'Correct Answer!',
      classes:'toast-valid',
      displayLength:1500
    });
    this.setState(prevState=>({
      score:prevState.score+1,
      correctAnswers:prevState.correctAnswers+1,
      currentQuestionIndex:prevState.currentQuestionIndex+1,
      numberofAnsweredQuestions:prevState.numberofAnsweredQuestions+1
    }),()=>{
      if(this.state.nextQuestion===undefined)
      {
        this.endGame();
      }else{
      this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
      }
    });
   }

   
   wrongAnswer =()=>{
    console.log("wrong");
    M.toast({
      html:'Wrong Answer!',
      classes:'toast-invalid',
      displayLength:1500
    });
    this.setState(prevState=>({
      wrongAnswers: prevState.wrongAnswers+1,
      currentQuestionIndex:prevState.currentQuestionIndex+1,
      numberofAnsweredQuestions:prevState.numberofAnsweredQuestions+1
    }),()=>{
      if(this.state.nextQuestion===undefined)
      {
        this.endGame();
      }else{
      this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
      }

    });
   }

   endGame = () =>{
   
    alert('Quiz has ended');
    const{ state }=this;
    const playerStats={
      score: state.score || 0,
      numberofQuestions: state.numberofQuestions || 0,
      numberofAnsweredQuestions: state.numberofAnsweredQuestions || 0,
      correctAnswers: state.correctAnswers || 0,
      wrongAnswers: state.wrongAnswers || 0,
    };
    console.log(playerStats);
   
    const queryString = Object.keys(playerStats)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(playerStats[key]))
    .join("&");

    setTimeout(()=>{
      window.location.href = `/QuizSummary?${queryString}`;
    },1000);
   }

  render()
  {
    
    const {currentQuestion,
    currentQuestionIndex,
  numberofQuestions}=this.state;
    return(
      
        <Fragment>
          <div className="questions">
            <h2>Quiz Mode</h2>
            <div>
              <p>
                <span>1 of 15</span>
              </p>
            </div>
            <h5>{currentQuestion.question}</h5>
            <div className="option-container"> 
              <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
              <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
            </div>
            <div className="option-container"> 
              <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
              <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
            </div>
            <div className="button-container">
              <button id="previous-button" onClick={this.handleButtonClick}>Previous</button>
              <button id="next-button" onClick={this.handleButtonClick}>Next</button>
            </div>
          </div>
        </Fragment>
    )
  }
}
  
  export default Play;
  