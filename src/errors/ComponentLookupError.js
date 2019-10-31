import { isNumber } from '../helpers/checkers';

export default class ComponentLookupError extends Error {
  constructor (level, path) {
    super();

    let additionalInfo;
    if (isNumber(level)) {
      additionalInfo = level + " exceeds the number of components in the chain";
    } else {
      additionalInfo = "'" + level + "' component doesn't exist in the chain";
    }

    this.message = "Unable to reach the component. " + additionalInfo + " (" + path.join(' -> ') + ").";
  }
}
