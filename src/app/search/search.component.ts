import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

prin:any=[];

  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  bata:{
    image : string,
    userId : string,
   name : string,
   age : number,
   qualification : string,
   horoscope : string,
   star : string,
   phone : number,
  }[];
    // http: HttpClient;
  constructor(private http: HttpClient) {
    const auth = ('admin:secret');
    this.headers = new HttpHeaders({      
      'Content-Type': 'application/json',
      // 'Content-Encoding': 'gzip',
      'Authorization': 'Basic ' + btoa(auth)
    });
   }

  ngOnInit(): any {
    this.print()
  }

getprofile(x:any){
console.log(x)
  this.http.get('http://192.168.0.103:8083/matrimony/users?filter={"gender":"'+x.gender+'","maritalStatus":"'+x.maritalStatus+'","age":{$gte:'+x.fromage+',$lte:'+x.toage+'}}',{headers:this.headers}).subscribe((data: any) =>
  {
   this.bata=data;
 console.log(this.bata[1]);
 });
}

print(){
var i:number=0
for (i=0;i<=41;i++){
  this.prin.push(i)
}
console.log(this.prin)
}
}
