import { Router, RouterModule, Routes } from '@angular/router';

import {
    HelpComponent,
    HomeComponent,
    InstructorProfileComponent,
    InstructorProfilePublicComponent,
    SettingsComponent,
    CourseDetailComponent,
    ExplorarComponent,
    FeedbackComponent
} from './components/index.paginas';

import {
    AnalyticsInstructorComponent,
    CoursesInstructorComponent,
    CreateCourseComponent,
    CursoComponent,
    DashboardInstructorComponent
} from './cInstructor/instructor.paginas'

import {
    AboutUsComponent,
    FooterIiapComponent,
    HeaderIiapComponent,
    ShoppingCartComponent
} from './cIIAP/iiap.paginas';

import {
    AuxComponent,
    LoginComponent,
    RegisterComponent,
    AuxrComponent
} from './Login/sesion.paginas';

const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'ayuda', component: HelpComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'perfil-estudiante', component: InstructorProfilePublicComponent },
    { path: 'perfil-docente', component: InstructorProfileComponent },
    { path: 'configuracion', component: SettingsComponent },
    { path: 'cursos/curso-1', component: CourseDetailComponent },
    { path: 'cursos', component: ExplorarComponent },

    { path: 'home-instructor', component: DashboardInstructorComponent },
    { path: 'cursos-instructor', component: CoursesInstructorComponent },
    { path: 'crear-curso', component: CreateCourseComponent },

    { path: 'acerca-de', component: AboutUsComponent },
    { path: 'carrito', component: ShoppingCartComponent },

    { path: 'login', component: AuxComponent },
    { path: 'register', component: AuxrComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes);