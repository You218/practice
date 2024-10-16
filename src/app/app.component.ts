import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import {  FormBuilder } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  @ViewChild(ChildComponent) myname!: ChildComponent;


  users : any;
  constructor(private userData : ApiService, private fb : FormBuilder){
    userData.users().subscribe((data : any)=>{
      console.log(data);
      this.users = data;

    })
  }
  registrationForm = this.fb.group({
    userName : [''],
    password : ['']
  })
  // getUserFormData(data : any){
  //   this.userData.registerUsers(data).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }
  onSubmit(){
    console.log(this.registrationForm.value);
    this.userData.registerUsers(this.registrationForm.value).subscribe(response => console.log(response));
    console.log(this.myname.searchText);
  }


}
