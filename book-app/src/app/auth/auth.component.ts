import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service"
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.auth();
  }
  auth() {
    this.authService.auth('test', 'test').subscribe(
      (result: any) => {
        localStorage.setItem('jwt', result.token);
      },
      (error: any) => {
        if (error.status == 401) {
          console.log('wrong username or password')
        } else {
          console.log(error);


        }

      }
    )
  }
}
