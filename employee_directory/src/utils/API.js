/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/");
  },
  getRandomUserPic: function(image) {
    return axios.get("https://randomuser.me/" + image + "/picture");
  },
  getRandomUserList: function(info) {
    return axios.get("https://randomuser.me/" +info + "/info");
  }
};
