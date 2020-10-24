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
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { HeaderInstructorComponent } from './cInstructor/header-instructor/header-instructor.component';
import { LeftSidebarInstructorComponent } from './cInstructor/left-sidebar-instructor/left-sidebar-instructor.component';
import { DashboardInstructorComponent } from './cInstructor/dashboard-instructor/dashboard-instructor.component';
import { CreateCourseComponent } from './cInstructor/create-course/create-course.component';
import { FooterInstructorComponent } from './cInstructor/footer-instructor/footer-instructor.component';
import { InstructorProfileComponent } from './components/instructor-profile/instructor-profile.component';
import { InstructorProfilePublicComponent } from './components/instructor-profile-public/instructor-profile-public.component';
import { AboutUsComponent } from './cIIAP/about-us/about-us.component';
import { HeaderIiapComponent } from './cIIAP/header-iiap/header-iiap.component';
import { FooterIiapComponent } from './cIIAP/footer-iiap/footer-iiap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent,
    SettingsComponent,
    HelpComponent,
    HeaderInstructorComponent,
    LeftSidebarInstructorComponent,
    DashboardInstructorComponent,
    CreateCourseComponent,
    FooterInstructorComponent,
    InstructorProfileComponent,
    InstructorProfilePublicComponent,
    AboutUsComponent,
    HeaderIiapComponent,
    FooterIiapComponent
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
