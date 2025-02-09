import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'


const App = () => {
  
  const senderSet = new Set(chatMessages.map((entry) => entry.sender));
  const senderNames = (Array.from(senderSet));
  
  const [chatMessageData, setChatMessagData] = useState(chatMessages);
  const[likeCount, setLikeCount] = useState(0);

  const updateEntryData = updatedEntry => {
    const entries = chatMessageData.map(entry => {
      if (entry.id === updatedEntry.id){
        return updatedEntry;
      } 
      else{
        return entry;
      }
    });
    const likedCount = entries.filter(entry => entry.liked).length;
    setChatMessagData(entries);
    setLikeCount(likedCount);
    
  }

  return (
    <div id="App">
      <header id="App-header">
        {/* <h1>Chat between {senderNames[0]} and {senderNames[1]}</h1> */}
        <h1>
          Chat between {''}
          <span className="red">{senderNames[0]}</span>{''} and {''}
          <span className="purple">{senderNames[1]}</span>
        </h1>
        <div id="App-header-section">
          <h2 className="widget">{likeCount} ❤️s</h2>
        </div>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog 
          entries={chatMessageData}
          onUpdateEntry={updateEntryData}
          onUpdateLike={likeCount}
        ></ChatLog>
      
      </main>
    </div>
  );
};

export default App;


