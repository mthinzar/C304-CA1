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
    reply: "Hi! Welcome to SmartStore."
  },
  {
    keyword: "stock",
    reply: "I can help you check stock availability."
  },
  {
    keyword: "hours",
    reply: "I can help you check our opening hours."
  },
  {
    keyword: "visit",
    reply: "I can help you plan your warehouse visit."
  },
  {
    keyword: "location",
    reply: "Our SmartStore warehouse is located in Woodlands, Singapore."
  },
  {
    keyword: "warehouse",
    reply: "Our SmartStore warehouse is located in Woodlands, Singapore."
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

