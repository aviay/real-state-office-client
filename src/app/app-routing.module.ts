import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNewAssetComponent } from './components/my-assets/add-new-asset/add-new-asset.component';
import { MyAssetsComponent } from './components/my-assets/my-assets.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login",
  },
  {
    component: LoginComponent,
    path: "login",
  },
  {
    component: MyAssetsComponent,
    path: "my-assets",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
