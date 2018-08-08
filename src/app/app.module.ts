import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MvpTitleBarComponent } from './mvp-title-bar/mvp-title-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule,
         MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSidenavModule,
          MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MvpGamelogComponent } from './mvp-gamelog/mvp-gamelog.component';



@NgModule({
  declarations: [
    AppComponent,
    MvpTitleBarComponent,
    MvpGamelogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
