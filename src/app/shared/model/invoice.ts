import { propertyMap } from '../../core/mapping/propertyMap';

export class Invoice {

  public id: number;
  @propertyMap('name')
  public title: string;
  public phone: string;

  constructor() {
    // this.id = 0;
    // this.title = '';
    // this.phone = '';
  }

}
