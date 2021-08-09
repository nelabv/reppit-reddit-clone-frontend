import UserServices from "../services/user";

class Utilities {
  static async fetchVoteArray(token) {
    const data = await UserServices.fetchUserInformation(token);

    return data;
  }

  static async initArrowColor(postID, token) {
    const data = await Utilities.fetchVoteArray(token);
    const voteArray = data.data[0].votes.filter(object => object.post === postID);

    if (voteArray.length === 0) {
      return null;
    } else {
      return voteArray[0].vote;
    }; 
  }
};

export default Utilities;