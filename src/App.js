import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  console.log(props);
  return (
    <div>
      {/* <button onClick={() => props.history.push('/topics')}>Topics </button> */}
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = props => {
  return (
    <div>
      <h1>the T O P I C  L I S T  P A  G   E</h1>
      {/* <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link> */}
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>ToPiC dEtAiL PaGe: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
