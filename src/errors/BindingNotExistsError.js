export default class BindingNotExistsError extends Error {
  constructor (bindingName, componentName, path) {
    super();
    this.message = "Unable to access '" + bindingName + "' binding on '" + componentName + "' component on path (" + path.join(' -> ') + ") because it doesn't exist."
  }
}
