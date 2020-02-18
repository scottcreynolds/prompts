import React from 'react';
import logo from './logo.svg';
import {Prompt} from './Prompt'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's write some scenes!
        </p>
      </header>
      <main className="App-main">
        <section>
          <Prompt />
        </section>
      </main>
      <footer className="App-footer">
        How to use?
        <br />
        <span className="copyright">
          <a className="App-link" href="http://somedayscreenwriter.com" rel="noopener noreferrer" target="_blank">&copy;Scott C. Reynolds</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
