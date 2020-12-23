import { Router, RouterModule, Routes } from '@angular/router';

import {
    HelpComponent,
    HomeComponent,
    InstructorProfileComponent,
    InstructorProfilePublicComponent,
    SettingsComponent,
    CourseDetailComponent,
    ExplorarComponent,
    FeedbackComponent,
    DesarrollarCursoComponent
} from './components/index.paginas';

import {
    AnalyticsInstructorComponent,
    CoursesInstructorComponent,
    CreateCourseComponent,
    CursoComponent,
    DashboardInstructorComponent,
    PerfilDocenteIComponent
} from './cInstructor/instructor.paginas'

import {
    AboutUsComponent,
    FooterIiapComponent,
    HeaderIiapComponent,
    ShoppingCartComponent
} from './cIIAP/iiap.paginas';

import {
    AuxlComponent,
    LoginComponent,
    RegisterComponent,
    AuxrComponent
} from './Login/sesion.paginas';

const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'ayuda', component: HelpComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'perfil-estudiante', component: InstructorProfilePublicComponent },
    { path: 'usuarios/:usu', component: InstructorProfilePublicComponent },
    { path: 'perfil-instructor', component: InstructorProfileComponent },
    { path: 'configuracion', component: SettingsComponent },
    { path: 'configuracion/:usu', component: SettingsComponent },
    { path: 'cursos/:url', component: CourseDetailComponent },
    { path: 'cursos/curso-1', component: CourseDetailComponent },
    { path: 'cursos', component: ExplorarComponent },
    { path: 'cursos/:url/desarrollar', component: DesarrollarCursoComponent },

    { path: 'home-instructor', component: DashboardInstructorComponent },
    { path: 'perfil-instructor-i', component: PerfilDocenteIComponent },
    { path: 'cursos-instructor', component: CoursesInstructorComponent },
    { path: 'curso-form', component: CreateCourseComponent },

    { path: 'acerca-de', component: AboutUsComponent },
    { path: 'carrito', component: ShoppingCartComponent },

    { path: 'login', component: AuxlComponent },
    { path: 'register', component: AuxrComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes);