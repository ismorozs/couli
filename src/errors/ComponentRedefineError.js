export default class ComponentRedefineError extends Error {
  constructor (name) {
    super();
    this.message = "Trying to redefine existing component: '" + name + "'";
  }
}
