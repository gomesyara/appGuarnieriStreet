import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto.service';
import { LocalizacaoService } from '../services/localizacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listaProdutos : Produto[] = [];
  constructor(private produtoService: ProdutoService,
    private localizacaoService: LocalizacaoService) {}

  ngOnInit() {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
        this.localizacaoService.inserir({
          idusuario: 19,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          nome: "Yara",
          horario: new Date()
        }).subscribe();
      })
   },2000);
 }
}
    // this.produtoService.getProdutos().subscribe(
    //   (produtos) => {
    //     this.listaProdutos = produtos;
    //   }
    // )