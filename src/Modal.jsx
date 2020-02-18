import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Writing prompts are a tool to help you kickstart your writing. You can use them in an existing project to write new scenes, rewrite existing scenes to add more depth and interest, or simply as an exercise to prime your brain to write for the day. No rules!
        </p>
        <p>My suggestion? Take a prompt that piques your interest (maybe click the button a couple of times), set a timer, and just write whatever comes to mind using the prompt as inspiration.</p>
        <p>The result may be good, or it may be garbage, but what matters is you've written something! Build on the momentum and keep it going!</p>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;
