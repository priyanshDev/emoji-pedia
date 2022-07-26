import React from "react";
import Extra from "./Extra";
import emojipedia from "../emojipedia";

function createExtra(emojiTerm){
    return (<Extra key={emojiTerm.id} emoji={emojiTerm.emoji} name={emojiTerm.name} def={emojiTerm.meaning} />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
         {emojipedia.map(createExtra)}
      </dl>
    </div>
  );
}

export default App;
