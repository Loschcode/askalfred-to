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
        question: "I want to organize a romantic dinner with my girlfriend",
        answer: "Sure, what budget do you have?"
      },
      {
        question: "I'm lost and need to find my way to the hotel",
        answer: "No worry, I'll help you out right now."
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
