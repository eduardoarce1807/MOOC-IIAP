import { Router, RouterModule, Routes } from '@angular/router';

import {
    HelpComponent,
    HomeComponent,
    InstructorProfileComponent,
    InstructorProfilePublicComponent,
    SettingsComponent,
    CourseDetailComponent
} from './components/index.paginas';

const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'ayuda', component: HelpComponent },
    { path: 'perfil-docente', component: InstructorProfileComponent },
    { path: 'configuraciones', component: SettingsComponent },
    { path: 'detalle-curso', component: CourseDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes);