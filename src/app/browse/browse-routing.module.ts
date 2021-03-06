import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BrowseComponent } from "./browse.component";

const routes: Routes = [{
  path: 'browse',
  component: BrowseComponent,
  children: [{
    path: 'books',
    component: BookListComponent
  }, {
    path: 'books/:id',
    component: BookDetailComponent
  }, {
    path: '**',
    redirectTo: 'books',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
