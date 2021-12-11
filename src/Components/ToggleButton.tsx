import React, { FunctionComponent } from 'react'

type ToggleButtonParams = {
  isChecked: boolean;
  onUpdate: (val: boolean) => void;
  buttonLabel: string;
}

const ToggleButton: FunctionComponent<ToggleButtonParams> = ({isChecked, onUpdate, buttonLabel}) => {

  return (
    <button type="button" className='float-right-button' onClick={() => onUpdate(!isChecked)}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="unselected" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" className={isChecked ? "selected-button-icon" : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className={isChecked ? 'button-label-active' : 'button-label-inactive'}>
        {buttonLabel}
      </span>
    </button>
  )
}

export default ToggleButton;