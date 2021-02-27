import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prrofile',
  templateUrl: './prrofile.component.html',
  styleUrls: ['./prrofile.component.scss']
})
export class PrrofileComponent implements OnInit {
load:{
    dob: "",
    maritalStatus: "",
    name: "",
    gender: "",
    file:"",
};

  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  public files: any[];
  SERVER_URL = "http://localhost:3000/upload";
  uploadForm: FormGroup;  
  
  constructor(private http: HttpClient,private formBuilder: FormBuilder){
    this.files = [];
    const auth = ('admin:secret');
    this.headers = new HttpHeaders({
      'Content-Type': 'file',
      // 'Content-Encoding': 'gzip',
      'Authorization': 'Basic ' + btoa(auth)
    });
  }
  
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  file:any;
  
  onFileSelected(event: any){
    console.log(event)
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post<any>('http://192.168.0.103:8083/matrimony/users', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
send(load:any){
console.log(load)

}
}
