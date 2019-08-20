import { propertyMap } from '../../core/mapping/propertyMap';

export class Customer {

  public id: number;
  @propertyMap('name')
  public lastName: string;
  public firstName: string;
  public birthDate: Date;

  constructor() { }

}


