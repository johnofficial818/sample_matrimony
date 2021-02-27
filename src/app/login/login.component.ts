import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  x: any=[];
  headers: HttpHeaders;

  constructor(private http: HttpClient,private router: Router) {
    const auth = ('admin:secret');
    this.headers = new HttpHeaders({      
      'Content-Type': 'application/json',
      // 'Content-Encoding': 'gzip',
      'Authorization': 'Basic ' + btoa(auth)
    });
  }

  ngOnInit(): any {
  }

  login(x: any) {
    console.log(x);
    this.http.get('http://192.168.0.103:8083/matrimony/users?filter={$and:[{"email":"' + x.email + '","password":"' + x.password + '"}]}',{headers:this.headers}).subscribe((data: any) => {
      this.x = data;
      console.log(this.x.length);
      if(this.x.length==0){
        alert('Username/Password is incorrect.Please try again')
      }else{
        this.router.navigate(['/matpro']);
      }
      
    });

  }

}
