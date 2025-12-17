import React from 'react'

const Messages = ({text, sender, typing}) => {
    if (typing) {
    return (
      <div className="chatbot__message bot">
        <span className="typing-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </div>
    );
    }
  return (
    <div className={`chatbot__message ${sender}`}>
      {text}
    </div>
  )
}

export default Messages