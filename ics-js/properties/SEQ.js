import Property from "../Property";

export default class SEQ extends Property {
  static propName = 'SEQ';

  shortTransformer() {
	  // must be an integer
    return typeof this.value === 'number' && this.value % 1 === 0;
  }

  getPropName() {
    return 'SEQUENCE';
  }

  transformer() {
    return parseInt(this.value, 10);
  }
}
