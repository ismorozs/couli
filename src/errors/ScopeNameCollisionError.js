export default class ScopeNameCollisionError extends Error {
  constructor (name) {
    super();
    this.message = "Trying to assign a name '" + name + "' to a state that already exists in the chain.";
  }
}
