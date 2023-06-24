import React from "react";
import Entry from "./components/Entry";
import Emojipedia from "./emojipedia";

const createCard = (emojipedia) => {
  return <Entry
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
  />
}


function App() {

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;