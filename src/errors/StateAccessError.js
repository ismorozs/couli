export default class StateAccessError extends Error {
  constructor (path) {
    super();
    this.message = "Unable to access state on a path '" + path.join(' -> ') +  "' because it doesn't exist"
  }
}
