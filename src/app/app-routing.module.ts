import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'pages/about-me', loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMePageModule) },
  { path: 'pages/projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsPageModule) },
  { path: 'pages/contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule) },
  { path: 'pages/skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
