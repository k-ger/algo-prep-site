import React, { FunctionComponent } from 'react';
import { CardType, FlashCard } from '../data.service';

type TopicItemParams = {
  card: FlashCard;
  onSelected: (cardIdt: number, cardType: CardType) => void;
}

function getCardAlias(ct: CardType): string {
  switch(ct) {
    case CardType.ALGO:
      return 'A';
    case CardType.DATASTRUCTURE:
      return 'D';
    case CardType.SYS_DESIGN:
      return 'S'
  }
  return '';
}

const TopicItem: FunctionComponent<TopicItemParams> = (props) => {
  return (
    <div className="topic-container" onClick={() => props.onSelected(props.card.idt, props.card.cardType)}> 
      <div className='topic-type'>
        <span>
          {getCardAlias(props.card?.cardType)}
        </span>
      </div>
      <div className='topic-name'>
        {props.card?.name}
      </div>
    </div>
  )
}

export default TopicItem;