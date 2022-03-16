import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() { 
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Nuevo paciente'
      },
      {
        id: 2,
        nombre: 'Paciente existente'
      }
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      apellido: '',
      email: '',
      grupo: 0
    };
  }
}
