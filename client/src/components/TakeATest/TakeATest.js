import React,{Fragment} from "react";
import "./TakeATest.css";
import {Link} from 'react-router-dom'

const TakeATest=()=> (
    <Fragment>
        <div className="instruction container">
          <h1>Quiz Instructions</h1>
          <ol>
                <li>You will be asked 30 questions one after the another.</li>
                <li>1 points is awarded for the correct answer</li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be decleared at the end of the quiz.</li>
            </ol>
            <div>
              <span className="left"><Link to="/">No Take Me Back</Link></span>
              <span className="right"><Link to="/Play">Okay, Let's do this!</Link></span>
            </div>
        </div>
    </Fragment>
  );


export default TakeATest;

