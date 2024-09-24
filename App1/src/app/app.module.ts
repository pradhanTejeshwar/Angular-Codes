import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { TsComponent } from './ts/ts.component';
import { SpectsComponent } from './spects/spects.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  //{path:[], redirectTo:'/home',pathMatch:'full'},
  {path:'html',component:HtmlComponent},
  {path:'css',component:CssComponent},
  {path:'ts',component:TsComponent},
  {path:'spects',component:SpectsComponent}
  //{path:'**',component:PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    HtmlComponent,
    CssComponent,
    TsComponent,
    SpectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
