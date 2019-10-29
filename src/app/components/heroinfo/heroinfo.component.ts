import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import{ ActivatedRoute }from '@angular/router';


@Component({
  selector: 'app-heroinfo',
  templateUrl: './heroinfo.component.html',
  styleUrls: ['./heroinfo.component.css']
})
export class HeroInfoComponent implements OnInit {

  public HeroeFiltrado: any = {};

//inyeccion
  constructor(private ActivatedRouter:ActivatedRoute,
     private _HeroeService: HeroeService) {
    //HeroeID es igual al de la ruta
    const IdHeroeURL = this.ActivatedRouter.snapshot.paramMap.get('HeroeID');
     this.HeroeFiltrado=this._HeroeService.BuscarHeroes(IdHeroeURL);
    //  console.log(this.HeroeFiltrado)
     console.log(this.HeroeFiltrado.casa)
   }

  ngOnInit() {
  }

}
