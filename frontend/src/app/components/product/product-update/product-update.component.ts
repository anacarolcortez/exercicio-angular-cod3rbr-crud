import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const idString = id != null? id : '0'
    this.productService.readById(idString).subscribe( product => {
      this.product = product
    })
  }

  updateProduct() {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!")
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/loja'])
  }

}