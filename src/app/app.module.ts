import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';
import { PokemonInfosComponent } from './pokemon-infos/pokemon-infos.component';
import { GlobalFunctions } from './utils/globalFunctions.class';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonInfosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PokemonService, GlobalFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
