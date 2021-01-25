import React, {useState} from 'react';

export default function AppComponent() {
  const [isShown, setShown] = useState(0);
  const [inputText, setInputText] = useState('');
  let text;
  if(isShown === 0) {
    text = <div>Text goes here</div>
  } else {
    text = null;
  }
  return (
    <div>
      <button onClick={ () => {setShown(1)}}>Toggle</button>
      {text}
      <input type ="text" value={inputText} onChange={(e) => {
        setInputText(e.target.value);
      }}> </input>
    </div>
  )
}
