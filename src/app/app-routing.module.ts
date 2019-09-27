import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { FavoriteComponent } from './favorite/favorite.component';


const routes: Routes = [
  {path: '', component: ProviderComponent},
  {path: 'favorites', component: FavoriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
