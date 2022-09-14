import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    HomeComponent,
    AboutComponent,
    FoodContainerComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
