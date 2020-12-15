import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//Services
import { CargarScriptsService } from './services/cargar-scripts.service';

//Rutas
import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';

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
import { ShoppingCartComponent } from './cIIAP/shopping-cart/shopping-cart.component';

/////////////////////

import { HttpClientModule} from '@angular/common/http';

import {CategoriaService} from './services/categoria.service';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesInstructorComponent } from './cInstructor/courses-instructor/courses-instructor.component';
import { AnalyticsInstructorComponent } from './cInstructor/analytics-instructor/analytics-instructor.component';
import { CursoComponent } from './cInstructor/curso/curso.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { AuxrComponent } from './Login/auxr/auxr.component';
import { PerfilDocenteIComponent } from './cInstructor/perfil-docente-i/perfil-docente-i.component';
import { AuxlComponent } from './Login/auxl/auxl.component';


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
    FooterIiapComponent,
    ShoppingCartComponent,
    CourseDetailComponent,
    CoursesInstructorComponent,
    AnalyticsInstructorComponent,
    CursoComponent,
    ExplorarComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    AuxrComponent,
    PerfilDocenteIComponent,
    AuxlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    CargarScriptsService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
