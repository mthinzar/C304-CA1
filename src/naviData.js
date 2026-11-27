export const intents = [
  {
    id: "stock",
    label: "Check stock",
    title: "Check stock",
    desc: "See how many units of your items we have and where they are stored."
  },
  {
    id: "visit",
    label: "Plan a visit",
    title: "Plan a visit",
    desc: "Do you want to plan your visit to the warehouse?"
  },
  {
    id: "hours",
    label: "Opening Hours",
    title: "Opening Hours",
    desc: "See what time we open and close."
  },

];


export const botResponses = [
  {
    keyword: "hello",
    reply: "Hi! Welcome to SmartStore. How can I help you today?"
  },
  {
    keyword: "hi",
    reply: "Hello! I'm NaviBot, your SmartStore warehouse assistant."
  },
  {
    keyword: "stock",
    reply: "Of course! Click 'Check Stock' above and enter the product name to start your enquiry."
  },
  {
    keyword: "hours",
    reply: "You can view our warehouse operating schedule by clicking 'Opening Hours' above."
  },
  {
    keyword: "visit",
    reply: "You can plan your visit using the 'Plan a Visit' option above. Enter your preferred date, time and purpose."
  },
  {
    keyword: "location",
    reply: "Our warehouse is in Woodlands, Singapore. Click 'Plan a Visit' above to access the Google Maps directions link."
  },
  {
    keyword: "warehouse",
    reply: "Our warehouse is in Woodlands, Singapore. Click 'Plan a Visit' above for location information."
  },
  {
    keyword: "thank",
    reply: "You're welcome! Let me know if you need anything else."
  },
  {
    keyword: "bye",
    reply: "Goodbye! Thank you for visiting SmartStore."
  }
];

export const openingHours = [
  {
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM"
  },
  {
    day: "Saturday",
    time: "10:00 AM - 4:00 PM"
  },
  {
    day: "Sunday",
    time: "Closed"
  }
];

export const suggestedQuestions = [
  "Where is the warehouse?",
  "What are your opening hours?",
  "Can I check stock?"
];