// import Cable from '@/misc/Cable'
// import _ from 'lodash'
// import { createAnonymousUser } from '@/store/models/User'
// import EventsService from './EventsService'

class CampaignService {
  constructor(vm, campaign) {
    this.vm = vm;
    this.campaign = campaign;
  }

  /**
   * We take care of the connection
   */
  question() {
    return "I want to organize a romantic dinner with my girlfriend.";
  }

  answer() {
    return "Sure, what budget do you have?";
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
