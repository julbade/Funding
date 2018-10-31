import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharityComponent } from './charity/charity.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent }   from './project/project.component';
import { ProjectDetailComponent }   from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component'; 

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: 'projects/:id',
        component: ProjectDetailComponent
    }, 
    {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'charity',
        component: CharityComponent
      },
      {
        path: 'charity/:id',
        component: CharityComponent
      }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);