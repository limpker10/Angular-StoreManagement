import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  public formLogin: FormGroup;
  
  constructor(private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]] 
    });

  }
  ngOnInit(): void {
    this.loadApi();
  }
  
  loadApi():void {
    const respone = {
      email: "jcanov@unsa.edu.pe",
      password: "holamundo"
    }
    this.formLogin.patchValue({
      email : respone.email,
      password : respone.password
    });
  }
  send():any{
    console.log(this.formLogin.value)
  }
}
