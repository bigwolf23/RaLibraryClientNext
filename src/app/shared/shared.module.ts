import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';

import { CardComponent } from "./card/card.component";
import { ProgressComponent } from './progress/progress.component';
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { BookComponent } from './book/book.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    CardComponent,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    ProgressComponent,
    ToolbarComponent,
    TroubleshootingComponent,
    BookComponent
  ],
  declarations: [
    CardComponent,
    ProgressComponent,
    TroubleshootingComponent,
    BookComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
