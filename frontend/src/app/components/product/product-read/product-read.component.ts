import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  product!: Product
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe( products => {
      this.products = products
    })
  }


  deleteProduct(id: string) {
    if(confirm("Confirma a exclusão do produto?")) {
      this.productService.delete(id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso!")
        window.location.reload();
      })
    }
  }

}
