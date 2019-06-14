class CampaignService {
  constructor (vm, campaign) {
    this.vm = vm
    this.campaign = campaign
    this.mapSelection = this.random(this.map())
  }

  question () {
    return this.mapSelection.question
  }

  answer () {
    return this.mapSelection.answer
  }

  map () {
    return [
      {
        question:
          "I just arrived to Berlin, what's the best way to move around the city?",
        answer: 'I have a few suggestions for you depeding your budget.'
      },
      {
        question:
          "I'm very tired in the airport, can you search for lounges I can sleep in here?",
        answer: "Sure, there's one next to you. Do you want me to make a short reservation while you walk there?"
      },
      {
        question:
          'Hey Alfred! My wash machine is leaking, can you call a plumber for me, I need a fix ASAP!',
        answer: 'The plumber will be here in a few minutes.'
      },
      {
        question:
          'Can you find me someone to clean my flat today? My girlfriend arrives soon...',
        answer: 'No problem, as usual and in your budget.'
      },
      {
        question:
          'Can you call this restaurant and book it for me for tonight?',
        answer: 'Your reservation is made for 8pm on your favorite spot.'
      },
      {
        question:
          'I have a date tonight, she seems very fancy, can you recommend me a good restaurant?',
        answer: 'Sure, what budget do you have?'
      },
      {
        question:
          'Can you call my gym and cancel my membership, let me know if you need anything from me',
        answer:
          "I will need you to sign this document, I'll send it via post."
      },
      {
        question:
          "I'm free around March, I've 350€ budget, can you give me some possible trips? I want a warm country.",
        answer: 'Here are a few possibilities you might like...'
      },
      {
        question:
          'I booked some tickets for Cuba, can you send me all the documents I need to fill for the visa there?',
        answer:
          "You'll need to fulfil this form. Do you want me to use your data and send it through?"
      },
      {
        question: "I'm lost and need to find my way to the hotel",
        answer: "No worry, I'll help you out right now."
      },
      {
        question:
          "This tracking doesn't make sense, can you call the post office and tell me what happened to my package?",
        answer:
          'They lost your package, do you want me to process a complaint for you?'
      },
      {
        question:
          "Can you book me a one-way to Vancouver when it goes below 250€?",
        answer: 'No problem.'
      },
      {
        question: 'I need you to call this place for me about my package everyday for a week. They lost it.',
        answer: 'This will be done.'
      }
    ]
  }

  random (array) {
    return array[(Math.random() * array.length) | 0]
  }
}

export default CampaignService
