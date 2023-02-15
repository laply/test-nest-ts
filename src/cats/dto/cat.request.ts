export class catRequest {
  readonly name: string;
  readonly age: number;
  readonly breed: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
