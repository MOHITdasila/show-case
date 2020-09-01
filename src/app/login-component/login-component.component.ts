import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
  login() {
    if (this.logInForm.value.email === 'abcd@gmail.com' && this.logInForm.value.password === 'qwerty') {
      this.router.navigateByUrl('/product');
    } else {
      this.snackBar.open('Not Authoriozed', 'okay' , {
        duration: 2000,
      });
    }
  }
}
