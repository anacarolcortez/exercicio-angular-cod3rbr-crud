import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CrudProdutosComponent } from './views/crud-produtos/crud-produtos.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"loja",
    component: CrudProdutosComponent
  },
  {
    path:"loja/cadastro",
    component: ProductCreateComponent
  },
  {
    path:"loja/atualizar/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
