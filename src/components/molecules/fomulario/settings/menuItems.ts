export class Item {
  constructor(
    readonly name: string,
    private readonly icon: string,
    private readonly subItems: string[] | null
  ){
    this.name = name;
    this.icon = icon;
    this.subItems = subItems;
    
  }
}