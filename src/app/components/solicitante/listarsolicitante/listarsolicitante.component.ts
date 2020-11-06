import { Component, OnInit } from '@angular/core';
import { Solicitante } from 'src/app/models/solicitante';
import { SolicitanteService } from 'src/app/services/solicitante.service';


@Component({
  selector: 'app-listarsolicitante',
  templateUrl: './listarsolicitante.component.html',
  styleUrls: ['./listarsolicitante.component.css']
})
export class ListarsolicitanteComponent implements OnInit {
  solicitante: Solicitante[];
  //displayedColumns :string[] = ['PERSONA_ID_PERSONA', 'ID_SOLICITANTE','UBICACION_ID_UBI_HIJO']
  constructor(private solicitanteService :SolicitanteService) { }

  ngOnInit(): void {
    this.solicitanteService.getSolicitante().subscribe( 
      (data)=>{
        this.solicitante = data['cursor_solicitante'];
        alert(this.solicitante);
      }
    )
  }
}
