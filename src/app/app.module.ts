import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowseModule } from "./browse/browse.module";
import { CoreModule } from "./core/core.module";
import { ProfileModule } from "./profile/profile.module";
import { SearchModule } from "./search/search.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from "./core/login-dialog/login-dialog.component";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowseModule,
    CoreModule,
    ProfileModule,
    SearchModule,
    FlexLayoutModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }
