import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent  implements OnInit{
  id !: number;
  enableEdit : boolean =false;
  constructor(private active : ActivatedRoute){}
  ngOnInit(): void {
    this.active.params.subscribe((param : Params) => {
      this.id = param['id'];
      this.enableEdit = this.id != null;
    })
  }

}
