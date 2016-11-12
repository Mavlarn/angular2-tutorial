export class Todo {
  id: number;
  title: string = '';
  createdDate: Date = new Date();
  complete: boolean = false;

  constructor() { }
}