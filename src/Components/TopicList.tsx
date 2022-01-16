import React, { FunctionComponent } from "react";
import { CardType, FlashCard } from "../data.service";
import TopicItem from "./TopicItem";

type TopicListParams = {
  topics: FlashCard[];
  onTopicSelected: (cardIdt: number, cardType: CardType) => void;
}

const TopicList: FunctionComponent<TopicListParams> = (props) => {

  return (
    <>
      {props.topics.map((t) => {
        return <TopicItem key={`${t.idt},${t.cardType}`} card={t} onSelected={props.onTopicSelected}></TopicItem>
      })}
    </>
  )
}

export default TopicList