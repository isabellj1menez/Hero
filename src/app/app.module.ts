import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { appRouting} from './app.routes';
import { LoadingComponent } from './components/loading/loading.component';
import { HeroInfoComponent } from './components/heroinfo/heroinfo.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    LoadingComponent,
    HeroInfoComponent,
    BuscarHeroeComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
