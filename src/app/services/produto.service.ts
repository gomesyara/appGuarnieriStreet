import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

interface Produto{
  idproduto: number,
  fkmarca: number,
  nome: string,
  preco: number
}
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(){

  }

}
