import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Produto{
  idproduto: number,
  fkmarca: number,
  nome: string,
  preco: number
}

@Injectable({
  providedIn: 'root'
})


export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(){

  }

}
