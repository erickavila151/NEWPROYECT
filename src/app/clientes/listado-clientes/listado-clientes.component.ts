import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  grupo: Array<Cliente>

  clientes!: Cliente[];
  constructor(private clientesService: ClientesService) { 
    this.grupo = 
    [
      
    ]
  }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

}