import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import * as data from '../../groom.json';
import { PrrofileComponent } from '../prrofile/prrofile.component';



@Component({
  selector: 'app-matpro',
  templateUrl: './matpro.component.html',
  styleUrls: ['./matpro.component.scss']
})
export class MatproComponent implements OnInit {
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  bata: {
    age: number
    contact: number
    dob: string
    email: string
    gender: string
    image: string
    maritalStatus: string
    motherTongue: string
    name: string
    password: string
    qualification: string
    star: string
    userId: string
    zodiac: string
  }[]
  activeModal: any;

  constructor(private http: HttpClient) {
    const auth = ('admin:secret');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Content-Encoding': 'gzip',
      'Authorization': 'Basic ' + btoa(auth)
    });

  }
  grooms: any = (data as any).default;
  ngOnInit(): any {
    this.http.get('http://192.168.0.103:8083/matrimony/users', { headers: this.headers }).subscribe((data: any) => {
      this.bata = data;
      console.log(this.bata[1]);
    }, (error) => {
      if (error.status == 401) {
        this.activeModal.close();
      }
    });

  }

}
