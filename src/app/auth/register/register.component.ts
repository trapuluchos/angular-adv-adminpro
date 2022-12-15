import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength( 5 ), Validators.maxLength(30) ] ],
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
    confirmPassword: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
    terms: [ false, [ Validators.required, Validators.requiredTrue ] ],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.registerForm.valueChanges.subscribe( console.log );
  }

  register(): void {

    if( this.registerForm.invalid ) {
      this.registerForm.markAllAsTouched();
      return;
    } 

    

  }


}
