class CampaignService {
  // samples
  // holidays, phone, tips, sport, assistance, restaurant, deals, post, booking
  // scubadive
  constructor (vm, sample) {
    this.vm = vm
    this.sample = []
    if (sample) this.sample = sample.split(',')

    const filteredSelection = this.map().filter(item => this.itContains(this.sample, item.sample))

    let endSelection;
    if (filteredSelection.length === 0) {
      endSelection = this.map()
    } else {
      endSelection = filteredSelection
    }

    this.mapSelection = this.random(endSelection)
  }

  itContains (arrayAnd, arrayOr) {
    return arrayAnd.every(item => arrayOr.includes(item))
  }

  question () {
    return this.mapSelection.question
  }

  answer () {
    return this.mapSelection.answer
  }

  id  () {
    return this.mapSelection.id
  }

  map () {
    return [
      {
        sample: ['holidays', 'deals'],
        id: 'arrived-to-berlin-move-city',
        question:
          "I just arrived to Berlin, what's the best way to move around the city?",
        answer: 'I have a few suggestions for you depending your budget.'
      },
      {
        id: 'tired-airport-search-lounge',
        sample: ['phone', 'assistance'],
        question:
          "I'm very tired in the airport, can you search for lounges I can sleep in here?",
        answer: "Sure, there's one next to you. Do you want me to make a short reservation while you walk there?"
      },
      {
        id: 'wash-machine-leaking-plumber-call',
        sample: ['phone', 'assistance'],
        question:
          'Hey Alfred! My wash machine is leaking, can you call a plumber for me, I need a fix ASAP!',
        answer: 'The plumber will be here in a few minutes.'
      },
      {
        id: 'find-clean-flat-girlfriend-arrives',
        sample: ['phone', 'assistance'],
        question:
          'Can you find me someone to clean my flat today? My girlfriend arrives soon...',
        answer: 'No problem, as usual and in your budget.'
      },
      {
        id: 'can-you-call-restaurant-book-tonight',
        sample: ['phone', 'restaurant', 'booking'],
        question:
          'Can you call this restaurant and book it for me for tonight?',
        answer: 'Your reservation is made for 8pm on your favorite spot.'
      },
      {
        id: 'call-place-for-tonight',
        sample: ['phone', 'booking'],
        question:
          'I\'ve to book this place for tonight, can you call them for me?',
        answer: 'Sure, consider it done.'
      },
      {
        id: 'restaurant-only-call-order-for-me',
        sample: ['phone', 'restaurant', 'booking'],
        question:
          'This restaurant only accepts phone calls, can you order it for me?',
        answer: 'Your food is on the way.'
      },
      {
        id: 'date-tonight,recommend-good-restaurant-here',
        sample: ['tips'],
        question:
          'I have a date tonight, can you recommend me a good restaurant around here?',
        answer: 'Sure, what budget do you have?'
      },
      {
        id: 'random-sport-activity-saturday-friends',
        sample: ['tips', 'sport'],
        question:
          'I want to do a random sport activity this Saturday with my friends.',
        answer: 'Sure, what budget do you have?'
      },
      {
        id: 'date-tonight,recommendd-good-restaurant',
        sample: ['tips', 'restaurant'],
        question:
          'I have a date tonight, can you recommend me a good restaurant around here?',
        answer: 'Sure, what budget do you have?'
      },
      {
        id: 'call-gym-cancel-membership-send-via-post',
        sample: ['administration', 'sport', 'phone'],
        question:
          'Can you call my gym and cancel my membership, let me know if you need anything from me',
        answer:
          "I will need you to sign this document, I'll send it via post."
      },
      {
        id: 'find-gym-around-location-call-them-deal',
        sample: ['tips', 'sport', 'deals'],
        question:
          'I need to find a gym around my location, can you call them and find a deal for today?',
        answer:
          "Here's a list of interesting gym deals for you."
      },
      {
        id: 'holidays-friends-what-sport-try-here',
        sample: ['holidays', 'sport', 'tips'],
        question:
          "I'm in holidays with my friends, what sport activities can I try here?",
        answer: 'Here are a few possibilities you might like.'
      },
      {
        id: 'holidays-friends-scubadive',
        sample: ['holidays', 'deals', 'scubadive'],
        question:
          "I'm in holidays with my friends, they want to scubadive.",
        answer: "Here's a list of the best deals for you."
      },
      {
        id: 'around-march-budget-possible-trips-warm-country',
        sample: ['holidays', 'tips'],
        question:
          "I'm free around March, I've 350€ budget, can you give me some possible trips? I want a warm country.",
        answer: 'Here are a few possibilities you might like.'
      },
      {
        id: 'booked-ticket-cuba-visa',
        sample: ['holidays', 'administration'],
        question:
          'I booked some tickets for Cuba, can you send me all the documents I need to fill for the visa there?',
        answer:
          "You'll need to fulfil this form. Do you want me to use your data and send it through?"
      },
      {
        id: 'lost-need-find-hotel',
        sample: ['holidays', 'assistance'],
        question: "I'm lost and need to find my way to the hotel",
        answer: "No worry, I'll help you out right now."
      },
      {
        id: 'tracking-no-sense-call-post-office',
        sample: ['administration', 'assistance', 'post'],
        question:
          "This tracking doesn't make sense, can you call the post office and tell me what happened to my package?",
        answer:
          'They lost your package, do you want me to process a complaint for you?'
      },
      {
        id: 'book-one-way-vancouver-reach-price',
        sample: ['holidays', 'deals', 'booking'],
        question:
          "Can you book me a one-way to Vancouver when it goes below 250€?",
        answer: 'No problem.'
      },
      {
        id: 'call-place-about-package-everyday-week-lost',
        sample: ['administration', 'post', 'phone'],
        question: 'I need you to call this place for me about my package everyday for a week. They lost it.',
        answer: 'This will be done.'
      },
      {
        id: 'written-letter-no-time-to-send',
        sample: ['post'],
        question: 'I\'ve written a letter but got no time to send it through.',
        answer: 'No worry, I\'ll post it for you.'
      }
    ]
  }

  random (array) {
    return array[(Math.random() * array.length) | 0]
  }
}

export default CampaignService
