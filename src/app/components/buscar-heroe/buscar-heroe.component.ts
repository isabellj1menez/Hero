import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string = "";
  public heroesFiltrados: any = {};
  public loading: boolean = true;


  constructor(private ActivatedRoute: ActivatedRoute, private _heroeService: HeroeService, private router:Router) {
    
    this.ActivatedRoute.params.subscribe((terminoURL) => {

      this.loading=false;
      this.termino = terminoURL.termino
      // console.log(this.termino)
      this.heroesFiltrados = this._heroeService.buscarheroe(this.termino);
      //  console.log(this.heroesFiltrados)
    })
  }

  public MandarInformacion(idHero){
    this.router.navigate(['informacionheroe',idHero])
  }

  ngOnInit() {
  }

}
