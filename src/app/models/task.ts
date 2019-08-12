export class Task {
  constructor(
    public title: string,
    public remind_to: number,
    public created_by: number,
    public remainder_date: string,
    public created_date: string,
    public id: number
  ) {}
}
