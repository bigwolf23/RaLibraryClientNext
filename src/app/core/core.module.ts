import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatProgressBarModule,
  MatTabsModule
} from '@angular/material';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { SharedModule } from "../shared/shared.module";

import { AuthenticationService } from "./authentication.service";
import { BooksService } from "./books.service";
import { Interceptor } from "./interceptor.service";
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NavComponent } from './nav/nav.component';
import { UsersService } from "./users.service";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NavComponent
  ],
  providers: [
    AuthenticationService,
    BooksService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  declarations: [
    LoginDialogComponent,
    NavComponent
  ]
})
export class CoreModule { }
