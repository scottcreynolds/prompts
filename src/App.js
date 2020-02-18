import React from 'react';
import logo from './logo.svg';
import {Prompt} from './Prompt'
import useModal from './useModal'
import Modal from './Modal'
import './App.css';

function App() {
  const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button className="how-to" onClick={toggle}>How to use prompts?</button>
        </p>
      </header>
      <main className="App-main">
        <section>
          <Prompt />
        </section>
      </main>
      <footer className="App-footer">

        <Modal isShowing={isShowing} hide={toggle}/>
        <a className="copyright" href="http://somedayscreenwriter.com" rel="noopener noreferrer" target="_blank">&copy;Scott C. Reynolds</a>
      </footer>
    </div>
  );
}

export default App;
