import { Component, OnInit, Input, Output } from '@angular/core';
import {Receipe} from '../../recipe.model';
import {EventEmitter} from 'events';

@Component({selector: 'app-recipe-item', templateUrl: './recipe-item.component.html', styleUrls: ['./recipe-item.component.css']})
export class RecipeItemComponent implements OnInit {
  // tslint:disable-next-line:typedef-whitespace
  @Input()recipe : Receipe;
  @Output() recipeSelected = new EventEmitter<void>  ();
  constructor() {}

  ngOnInit() {}
  onSelectd() {
    this.recipeSelected.emit();
  }
}
