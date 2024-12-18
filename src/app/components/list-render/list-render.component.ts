import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 2},
    {name: "Tom", type: "Cat", age: 3},
    {name: "Frida", type: "Dog", age: 1},
    {name: "Bob", type: "Horse", age: 4}
  ]

  constructor() { }

  ngOnInit(): void {}

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

}
