import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({selector: 'app-recipe-list', templateUrl: './recipe-list.component.html', styleUrls: ['./recipe-list.component.css']})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter < Recipe > ();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkrvyCAdsBeGicpX_7n4RtJ1R' +
        'rgad_R4anqIPvPdAF3DKPy5-'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A another recipe', 'This is simply a test 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkrvyCAdsBeGicpX_7n4RtJ1R' +
        'rgad_R4anqIPvPdAF3DKPy5-')
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this
      .recipeWasSelected
      .emit(recipe);
  }
}
