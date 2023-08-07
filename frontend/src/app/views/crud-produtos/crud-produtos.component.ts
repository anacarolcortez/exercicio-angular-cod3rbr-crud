import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-produtos',
  templateUrl: './crud-produtos.component.html',
  styleUrls: ['./crud-produtos.component.css']
})

export class CrudProdutosComponent implements OnInit{

  constructor(private router: Router) {}
  
  ngOnInit(): void {}

  navigateToProductCreate() : void {
    this.router.navigate(['/loja/cadastro']);
  }

}
