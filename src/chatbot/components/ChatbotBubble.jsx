import React from 'react'

const ChatbotBubble = ({ onClick }) => {
  return (
    <button
    onClick={onClick}
    aria-label='Open Chatbot'
    className='chatbot__bubble'
    >
        💬
    </button>
  )
}

export default ChatbotBubble