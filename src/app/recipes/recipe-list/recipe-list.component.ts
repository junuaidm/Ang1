import { Component, OnInit } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Receipe [] = [
    // tslint:disable-next-line:max-line-length
    new Receipe ('A Test recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkrvyCAdsBeGicpX_7n4RtJ1Rrgad_R4anqIPvPdAF3DKPy5-'),
    // tslint:disable-next-line:max-line-length
    new Receipe ('A Test recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkrvyCAdsBeGicpX_7n4RtJ1Rrgad_R4anqIPvPdAF3DKPy5-'),

  ];
  constructor() { }

  ngOnInit() {
  }

}
