import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { PageComponent } from './page/page.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartItemsComponent } from './cartitem/cartitem.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'designs',component:DesignComponent},
  {path:'page',component:PageComponent},
  {path:'fabrics',component:FabricsComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
   {path:'terms', component:TermsComponent},
   {path:'faq',component:FaqComponent},
   {path:'viewProduct/:id',component:ViewproductComponent}, 
   {path:'bookstitch',component:ProductComponent},
   {path:'order',component:CartItemsComponent},
   {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
   {path:'privacy',component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
