import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/inerface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  form: FormGroup=new FormGroup({});
  submitted:boolean=false
  validateForm: any;
  suffixTemplateInfo: any;
  constructor(
    public authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit(){
    console.log(this.form.value.email)
    console.log(this.form.invalid)
    if (  this.form.invalid ) {
      return;
    }

    this.submitted = true;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };
    this.authService.login(user).subscribe( (res:Response) => {
        console.log(res);
        this.form.reset;
        this.router.navigate( ['users']);
        this.submitted = false;

      }, () => {
        this.submitted = false;
      }

    );

  }
}
