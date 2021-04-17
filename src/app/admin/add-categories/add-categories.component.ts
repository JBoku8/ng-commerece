import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {


  title: string = "";

  categoryType: string = "";

  desciptionBox: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  addCategory(formValue: NgForm) {
    console.log(formValue.value);
  }

}
