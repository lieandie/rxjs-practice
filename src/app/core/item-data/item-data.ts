export class ItemData {
  id: number;
  name: string;
  type: string;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
    this.name = 'Name' + this.id;
    this.type = 'Type' + this.id;
  }
}
