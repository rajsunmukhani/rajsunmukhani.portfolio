import knowledgeBase from "../data/knowledgeBase";

const matchIntent = (userMessage) => {
  const message = userMessage.toLowerCase().replace(/[?.,!]/g, "").trim();
  const words = message.split(/\s+/)

  const priorityOrder = [
    "resume", 
    "contact", 
    "projects", 
    "skills", 
    "openToWork", 
    "compliments", 
    "smallTalk", 
    "greetings", 
    "about"
  ];

  for (const intent of priorityOrder) {
    const data = knowledgeBase[intent];
    if (!data) continue;

    const { keywords, responses } = data;


    const isMatch = keywords.some(keyword => {
  
      if (!keyword.includes(" ")) {
        return words.includes(keyword);
      }
  
      return message.includes(keyword);
    });

    if (isMatch) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  const fallbacks = [
    "I'm not 100% sure what you mean. Try asking about Raj's 'projects' or 'skills'!",
    "That went a bit over my head! Mind rephrasing? You can also use the buttons above.",
    "I'm still learning! Are you looking for Raj's resume or his contact info?"
  ];
  
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};

export default matchIntent;