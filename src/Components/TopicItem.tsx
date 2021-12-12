import React, { FunctionComponent } from 'react';
import { CardType, FlashCard } from '../data.service';

type TopicItemParams = {
  card: FlashCard;
  onSelected: (cardIdt: number, cardType: CardType) => void;
}

const TopicItem: FunctionComponent<TopicItemParams> = (props) => {
  return (
    <div className="topic-container" onClick={() => props.onSelected(props.card.idt, props.card.cardType)}> 
      <div className='topic-type'>
        <span>
          {props.card?.cardType === CardType.ALGO ? 'A' : 'D'}
        </span>
      </div>
      <div className='topic-name'>
        {props.card?.name}
      </div>
    </div>
  )
}

export default TopicItem;