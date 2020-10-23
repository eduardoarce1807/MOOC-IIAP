import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//Services
import { CargarScriptsService } from './services/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
