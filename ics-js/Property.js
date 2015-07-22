export default class Property {
  static keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
  static propName = "Property";

  constructor(value, skipTransformer = false, propParams = {}) {
    this.value = value;
    this.skipTransformer = skipTransformer;
    this.propParams = propParams;
  }

  shortTransformer() {
    return true;
  }

  transformer() {
    return this.value;
  }

  transformedValue() {
    if (this.skipTransformer || this.shortTransformer()) return this.value;
    return this.transformer();
  }

  getPropName() {
    return this.constructor.propName;
  }

  transformedName() {
    let propName = this.getPropName();
    let params = Object.keys(this.propParams).map(key => `${key}=${this.propParams[key]}`).join(';');
    if (params) {
  	  return `${propName};${params}`;
    }
    return propName;
  }

  toString() {
    return `${this.transformedName()}:${this.transformedValue()}`;
  }
}
