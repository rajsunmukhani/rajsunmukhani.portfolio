import React from "react";

const QuickActions = ({ onSelect }) => {
  const actions = [
    { label: "About Raj", value: "Tell me about Raj" },
    { label: "Skills", value: "What skills does he has?" },
    { label: "Projects", value: "What projects has he built?" },
    { label: "Resume", value: "Show me Raj's resume" },
    { label: "Open to Work", value: "Is he open to work?" },
    { label: "Contact", value: "How can I contact you?" },
  ];

  return (
    <div className="chatbot__quick-actions">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelect(action.value)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
