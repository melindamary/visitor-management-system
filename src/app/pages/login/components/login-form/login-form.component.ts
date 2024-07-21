import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/authServices/auth.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatIcon, RouterModule, NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  public constructor(public authService: AuthService,public router:Router ){}

  loginForm!: FormGroup;
  errorMessage: string = ''; // Error message to be displayed when login fails

  onSubmit(): void {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          if(this.authService.isLoggedIn()){
            this.router.navigate(['/vms']);
          }
          console.log(response);
    },(error) => {
      this.errorMessage = "Invalid username or password. Please try again."; 
    });
  }
  }; 
  clearError(): void {
    this.errorMessage = '';
  }
  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }

}
