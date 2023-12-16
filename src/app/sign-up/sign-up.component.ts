import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User;

  constructor() {
    this.user = new User();
  }

  onSubmit() {
    console.log(this.user);
  }
  change(e: any) {
    console.log(e);
  }


}

class User {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public password?: string
  ){}
}
