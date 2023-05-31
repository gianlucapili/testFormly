import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Route } from '@angular/router'
import { HomeComponent } from './pages/base-pages/home/home.component'

const routes: Route[] =
  [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: "" },
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
