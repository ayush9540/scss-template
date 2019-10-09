import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToggleEncDecComponent } from './toggle-enc-dec/toggle-enc-dec.component';
import { HeaderComponent } from './header/header.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { OverviewComponent } from './overview/overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScssTemplateComponent } from './scss-template/scss-template.component';
import { ScssOverviewComponent } from './scss-overview/scss-overview.component'

@NgModule({
  declarations: [
    AppComponent,
    ToggleEncDecComponent,
    HeaderComponent,
    EncryptionComponent,
    DecryptionComponent,
    OverviewComponent,
    ScssTemplateComponent,
    ScssOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
