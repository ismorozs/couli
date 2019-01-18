export default class ComponentNotExistsError extends Error {
  constructor (name) {
    super();
    this.message = "Trying to retrieve component by name '" + name + "' that doesn't exist."
  }
}
