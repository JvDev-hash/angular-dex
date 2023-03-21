import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PokemonInfosComponent } from './pokemon-infos/pokemon-infos.component'
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
    { path: '', component: PokemonListComponent },
    { path: 'pokeinfos/:pokeName', component:  PokemonInfosComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}