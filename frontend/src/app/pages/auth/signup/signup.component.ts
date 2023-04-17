import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
      name:new FormControl(null,[Validators.required])
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
      name:this.form.value.name,
      returnSecureToken: true
    };
    this.authService.signup(user).subscribe( (res:Response) => {
        console.log(res);
        this.form.reset;
        this.router.navigate( ['dashboard']);
        this.submitted = false;

      }, () => {
        this.submitted = false;
      }

    );

  }
}
