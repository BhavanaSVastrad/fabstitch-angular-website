import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { NavComponent } from './nav/nav.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { PageComponent } from './page/page.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    FaqComponent,
    TermsComponent,
    NavComponent,
    SlideComponent,
    HomeComponent,
    DesignComponent,
    PageComponent,
    FabricsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
