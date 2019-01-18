import { isNumber } from '../helpers/checkers';

export default class StateLookupError extends Error {
  constructor (level) {
    super();

    let additionalInfo;
    if (isNumber(level)) {
      additionalInfo = level + " exceeds number of states in the chain." 
    } else {
      additionalInfo = "'" + level + "' user statename doesn't exist."
    }

    this.message = "Unable to reach to the '" + level + "' state level. " + additionalInfo;
  }
}
