import React from 'react'

const ChatWindow = ({ isOpen, onClose, children }) => {

    if(!isOpen) return null;

  return (
    <div className='chatbot__window'>
        <div className="chatbot__header">
            <span>
                Portfolio Assistant
            </span>
            <button 
            onClick={onClose} aria-label='Close Chatbot'
            > X
            </button>
        </div>
        <div className="chatbot__body">
            {children}
        </div>
    </div>
  )
}

export default ChatWindow