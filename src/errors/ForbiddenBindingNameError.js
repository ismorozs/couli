import { VALUE_TYPES } from '../values/index';

export default class ForbiddenBindingNameError extends Error {
  constructor (bindingName) {
    super();
    this.message = "Can't declare a binding with the name '" + bindingName + "' because it's forbidden name.\nList of forbidden binding names: " + VALUE_TYPES.join(', ');
  }
}
