import React, { useState } from 'react'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

import './FAQDropBox.css'


const FAQDropBox = ({Number ,Question, Answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    // return (
    //     <div id='Question-Wrapper'>
    //         {Number < 10 ? 
    //             <p id='Number'>0{Number}</p> : 
    //             <p id='Number'>{Number}</p>
    //         }
    //         <div id='Content'>
    //             <p id='Question'>
    //                 {Question}
    //             </p>
    //             { showAnswer && (
    //                 <p id='Answer'>
    //                     {Answer}
    //                 </p>
    //             )
    //         }
    //         </div>
    //         <div id='showAnswer' onClick={() => setShowAnswer(!showAnswer)}> {!showAnswer ? 
    //             <img src={plus} width={20} height={20}></img> : 
    //             <img src={minus} width={20} height={20}></img> }
    //         </div>
            
    //     </div>
    // )

     return (
        <div id="Question-Wrapper">
            {Number < 10 ? (
                <p id="Number">0{Number}</p>
            ) : (
                <p id="Number">{Number}</p>
            )}
            <div id="Content">
                <p id="Question">{Question}</p>
                <p id={`Answer ${showAnswer ? 'show' : ''}`}>
                    {Answer}
                </p>
            </div>
            <div id="showAnswer" onClick={() => setShowAnswer(!showAnswer)}>
                {!showAnswer ? (
                    <img src={plus} width={20} height={20} alt="Expand" />
                ) : (
                    <img src={minus} width={20} height={20} alt="Collapse" />
                )}
            </div>
        </div> 
        )
}

export default FAQDropBox