// import Cable from '@/misc/Cable'
// import _ from 'lodash'
// import { createAnonymousUser } from '@/store/models/User'
// import EventsService from './EventsService'

class CampaignService {
  constructor(vm, campaign) {
    this.vm = vm;
    this.campaign = campaign;
    this.mapSelection = this.random(this.map());
  }

  /**
   * We take care of the connection
   */
  question() {
    return this.mapSelection.question;
  }

  answer() {
    return this.mapSelection.answer;
  }

  map() {
    return [
      {
        question:
          "I just arrived to Berlin, what's the best way to move around the city?",
        answer: "I have a few suggestions depending for you."
      },
      {
        question:
          "I'm very tired in the airport, can you search for lounges I can sleep in here ?",
        answer: "Sure, there's one next to you."
      },
      {
        question:
          "Hey Alfred! My wash machine is leaking, can you call a plumber for me, I need a fix ASAP!",
        answer: "The plumber will be here in a few minutes."
      },
      {
        question:
          "Find me a gym near my new flat for a budget of $60 / month without subscription",
        answer:
          "Sure, here's a list of gym, do you want me to call them up to crack some discounts?"
      },
      {
        question:
          "Can you find me someone to clean my flat today? My girlfriend arrives soon...",
        answer: "No problem, as usual and in your budget."
      },
      {
        question:
          "Can you call this restaurant and book it for me for tonight?",
        answer: "Your reservation is made for 8pm on your favorite spot."
      },
      {
        question:
          "I have a date tonight, she seems fancy as fuck, can you recommend me a good restaurant?",
        answer: "Sure, what budget do you have?"
      },
      {
        question:
          "Can you call my gym and cancel my membership, let me know if you need anything from me",
        answer:
          "I will need you to sign this document, I'll send it through via post."
      },
      {
        question:
          "I'm free around March, I've $500 budget, can you give me some possible trips ? I want a warm country.",
        answer: "Here are a few possibilities you might like..."
      },
      {
        question:
          "I booked some tickets for Thailand, can you send me what I need to fill for the visa there ?",
        answer:
          "You'll need to fulfil this form. Do you want me to use your data and send it through?"
      },
      {
        question: "I'm lost and need to find my way to the hotel",
        answer: "No worry, I'll help you out right now."
      },
      {
        question:
          "This tracking doesn't make sense, can you call the post office and tell me what happened to my package ?",
        answer:
          "They lost your package, do you want me to process a complaint for you?"
      },
      {
        question:
          "Can you book me a ticket to Vancouver around 15th March when it's below 500€ ?",
        answer: "No problem."
      },
      {
        question: "I need you to call this place for me about my package",
        answer: "This will be done today."
      }
    ];
  }

  random(array) {
    return array[(Math.random() * array.length) | 0];
  }

  /**
   * process the anonymous log-in
   * this will create a new user
   * and connect it completely
   */
  // async _connectAnonymous() {
  //   try {
  //     console.log("connect anonymous ...");
  //     const response = await createAnonymousUser(this.vm);
  //     localStorage.setItem("userToken", response.token);
  //   } catch (error) {
  //     this.events.crash("We were unable to create an anonymous user");
  //   }
  // }
}

export default CampaignService;
