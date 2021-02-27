import {HttpClientModule} from '@angular/common/http';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import {InputOverviewExample} from './app/input-overview-example';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { LogoutComponent } from './app/logout/logout.component';
import { PrrofileComponent } from './app/prrofile/prrofile.component';
import { MatproComponent } from './app/matpro/matpro.component';
import { AboutusComponent } from './app/aboutus/aboutus.component';
import { SearchComponent } from './app/search/search.component';
import { ExitComponent } from './app/exit/exit.component';



const routes: Routes = [
  {
    path: '',
    // redirectTo: 'register',
    pathMatch: 'full',
     component: InputOverviewExample
  },
  {
    pathMatch: 'full',
    path: 'login',
    component: LoginComponent
  },
  {
    path:'prrofile',
    component:PrrofileComponent
  },
  {
    path:'matpro',
    component:MatproComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  }
  ,
  {
    path:'search',
    component:SearchComponent
  }
  ,
  {
    path:'yes',
    component: InputOverviewExample

  }
  ,
  {
    path:'exit',
    component:ExitComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],

  entryComponents: [InputOverviewExample],
  declarations: [InputOverviewExample,LoginComponent,LogoutComponent,PrrofileComponent,MatproComponent,SearchComponent,ExitComponent],
  bootstrap: [LogoutComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})

export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));