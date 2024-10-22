import React from 'react'
import { Helmet } from 'react-helmet'
import TempImage from '../../assests/images/tempimage.png'
import { Link } from 'react-router-dom'


const QuizInstructions = () => {
  return (
    <>
        <Helmet>
            <title>Quiz instructions</title>
        </Helmet>
        <div className='instructions container'>
            <h1>How To Play</h1>
            <p>Ensure you read this guide formo start to finish.</p>
            <ul className='browser-default' id='main-list'>
                <li>The game has a duration of 15 minutes and ends as soon as the time elapes</li>
                <li>Each game consists of 15 questions</li>
                <li>
                    Each questions contains 4 options
                    <img src={TempImage} alt='Temp'/>
                </li>
                <li>
                    Select the option which best answrs the quesion by clicking (or selecting) it
                    <img src={TempImage} alt='Temp 2'/>

                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id='sublist'>
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the <span className='mdi mdi-set-center mdi-24px lifeline-icon'></span> Icon will remove 2 wrong answers, leaving the correct answer and one wrong answer
                    <br/>
                    <img src={TempImage} alt='Temp 3'/>

                </li>
                <li>
                    Using the hint by clicking the 
                        <span class="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span> 
                    icon will remove one wrong answer leaving two wrong answer and one correct answer. you can use as many hints as possible on a single question
                    <img src={TempImage} alt='Temp 3'/>
                </li>
                <li>Feel free to quit (or retire from) the game at any time. In that case your score will be not recorded</li>
                <li>The timer starts as soon as the game loads</li>
                <li>Lets do this if you think you have what it takes</li>
            </ul>
<div>
    <span className='left'><Link to='/'>No take me back</Link></span>
    <span className='right'><Link to='/play/quiz'>Okay Let's do this</Link></span>
</div>

        </div>
    </>
  )
}

export default QuizInstructions
