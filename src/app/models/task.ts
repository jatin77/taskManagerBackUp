export class Task {
  constructor(
    public title: string,
    public remind_to: string,
    public created_by: string,
    public remainder_date: string,
    public created_date: string
  ) {}
}
