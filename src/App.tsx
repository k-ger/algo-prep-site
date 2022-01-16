import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import ToggleButton from './Components/ToggleButton';
import TopicList from './Components/TopicList';
import { CardType, DataService, FlashCard } from './data.service';

export enum AppMode {
  CARD = 0,
  LIST = 1  
}

function App() {
  const [algos, setAlgos] = useState<FlashCard[]>([]);
  const [dataStructures, setDataStructures] = useState<FlashCard[]>([]);
  const [sysDesign, setSysDesign] = useState<FlashCard[]>([]);

  const [card, setCard] = useState<FlashCard>();
  const [showAlgos, setShowAlgos] = useState(true);
  const [showDataStructures, setShowDataStructures] = useState(true);
  const [showSysDesign, setShowSysDesign] = useState(true);

  const [selectedMode, setSelectedMode] = useState<AppMode>(AppMode.CARD);

  useEffect(() => {
    let _cards = new DataService().getFlashCards();
    let _algos = _cards.filter(x => x.cardType === CardType.ALGO);
    let _dataStructures = _cards.filter(x => x.cardType === CardType.DATASTRUCTURE);
    let _sysDesign = _cards.filter(x => x.cardType === CardType.SYS_DESIGN);
    
    setAlgos(_algos);
    setDataStructures(_dataStructures);
    setSysDesign(_sysDesign)
    setCard(_algos[0]);
    // return () => {
    //   cleanup
    // }
  }, [])

  function showNextCard(inc: 1 | -1): void {
    const cards = getAllApplicableTopics();
    const currCardIdx = card ? cards.indexOf(card) : -1;
    if(inc === -1) {
      let nextCardIdx = currCardIdx + inc < 0 ? cards.length - 1 : currCardIdx + inc;
      setCard(cards[nextCardIdx]);
    } else if (inc === 1) {
      let nextCardIdx = currCardIdx + inc >= cards.length ? 0 : currCardIdx + inc;
      setCard(cards[nextCardIdx]);
    }
  }

  //at least one of these has to be active at all times:
  function updateAlgos(val: boolean) {
    if(!val && !showDataStructures && !showSysDesign) {
      setShowDataStructures(true);
    }
    setShowAlgos(val);
  }
  function updateDataStructures(val: boolean) {
    if(!val && !showAlgos && !showSysDesign) {
      setShowAlgos(true);
    }
    setShowDataStructures(val);
  }
  function updateSysDesign(val: boolean) {
    if(!val && !showAlgos && !showDataStructures) {
      setShowAlgos(true);
    }
    setShowSysDesign(val);
  }

  function selectCard(cardIdt: number, cardType: CardType) {
    if(cardType === CardType.ALGO) {
      setSelectedMode(AppMode.CARD);
      setCard(algos[cardIdt]);
    } else if (cardType === CardType.DATASTRUCTURE) {
      setSelectedMode(AppMode.CARD);
      setCard(dataStructures[cardIdt]);
    } else if (cardType === CardType.SYS_DESIGN) {
      setSelectedMode(AppMode.CARD);
      setCard(sysDesign[cardIdt]);
    }
  }

  function getAllApplicableTopics(): FlashCard[] {
    let tps: FlashCard[] = [];
    if(showAlgos) {
      tps = tps.concat(algos);
    }
    if(showDataStructures) {
      tps = tps.concat(dataStructures);
    }
    if(showSysDesign) {
      tps = tps.concat(sysDesign);
    }
    return tps;
  }

  return (
    <div className="app">
      <header className="app-header">

        <button type="button" onClick={() => setSelectedMode(selectedMode === AppMode.CARD ? AppMode.LIST : AppMode.CARD)} 
                className={selectedMode === AppMode.LIST ? 'hidden' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg> */}
          Show All
        </button>

        <ToggleButton onUpdate={updateAlgos} buttonLabel='Algos' isChecked={showAlgos}></ToggleButton>
        <ToggleButton onUpdate={updateDataStructures} buttonLabel='DataStructures' isChecked={showDataStructures}></ToggleButton>
        <ToggleButton onUpdate={updateSysDesign} buttonLabel='SysDesign' isChecked={showSysDesign}></ToggleButton>

      </header>
      <div className="container">
        {selectedMode === AppMode.CARD && card && <Card card={card} getNext={() => showNextCard(1)} getPrev={() => showNextCard(-1)}></Card>}
        {selectedMode === AppMode.LIST && <TopicList topics={getAllApplicableTopics()} onTopicSelected={selectCard}></TopicList>}
      </div>
      <footer className='app-footer'>
        &#169;2022 using Create React App w/Typescript
      </footer>
    </div>
  );
}

export default App;
