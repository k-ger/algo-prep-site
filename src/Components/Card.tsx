import React, { FunctionComponent, useState, useEffect } from 'react'
import { FlashCard } from '../data.service'

type FlashCardParams = {
  card: FlashCard;
  getPrev: () => void;
  getNext: () => void;
}

const Card: FunctionComponent<FlashCardParams> = ({card, getPrev, getNext}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState<string>();
  
  useEffect(() => {
    setShowAnswer(false);
  }, [card])

  function clickShowAnswer() {
    setShowAnswer(!showAnswer);
    answer || setAnswer(card.description);
  }

  return (
    <div className="card" >
      <h3>
        <span className="q-indent">
          <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </span>
        {card.name}
        </h3>
      <hr></hr>
      <p dangerouslySetInnerHTML={{ __html: showAnswer ? answer || '' : ''}}>
      </p>
      <div className="fab left-fab" onClick={() => {setAnswer(undefined); getPrev()}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="fab right-fab" onClick={() => {setAnswer(undefined); getNext()}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="invisible-target" onClick={clickShowAnswer}>
        { !showAnswer &&
          <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        }
      </div>
    </div>
  )
}

export default Card;