import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {

  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  bata: any = {
    image: "",
    userId: "",
    dob: "",
    email: "",
    maritalStatus: "",
    motherTongue: "",
    name: "",
    gender: "",
    age: "",
    qualification: "",
    zodiac: "",
    star: "",
    contact: "",
    password: "",
    confirmPassword: "",
  };
  name = ""
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);
  data: any;
  activeModal: any;



  constructor(private http: HttpClient,private router: Router) {
    const auth = ('admin:secret');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Content-Encoding': 'gzip',
      'Authorization': 'Basic ' + btoa(auth)
    });
  }

  zodiacs: any = ["Mesh",
    "Varishabha",
    "Mithuna",
    "Karka",
    "Simha",
    "Kanya",
    "Tula",
    "Vrischika",
    "Dhanur",
    "Makara",
    "Kumbha",
    "Meena",];



  stars: any = ["Ashwini",
    "Bharani",
    "Krittika",
    "Ashwini",
    "Rohini",
    "Mrigashirsha",
    "Ardra",
    "Punarvasu",
    "Ashlesha",
    "Magha",
    "Purva Phalguni",
    "Uttara Phalguni",
    "Hasta",
    "Chitra",
    "The bright one",
    "Swati",
    "Vishaka",
    "Anuradha",
    "Jyeshta",
    "Moola",
    "Purva Ashadha",
    "Uttara Ashada",
    "Shravana",
    "Dhanistha",
    "Shatabhisaa",
    "Purva Bhadrapada",
    "Uttara Bhadrapada",
    "Revati",];

  register() {
    console.log(this.bata)

    this.bata.age = Number(this.bata.age)
    this.bata.contact = Number(this.bata.contact)
    this.bata.userId = 'SM' + Math.floor(100000 + Math.random() * 900000)
    this.http.post<any>('http://192.168.0.103:8083/matrimony/users', this.bata, { headers: this.headers }).subscribe((data: any) => {
        alert('Registered Successfully')
        this.router.navigate(['/login']);
    },(error) => {
        if (error.status == 401) {
          window.alert('something went wrong try again later');
        }
      });
  }
}
