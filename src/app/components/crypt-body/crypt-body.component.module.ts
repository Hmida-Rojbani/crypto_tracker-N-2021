import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CryptBodyComponent } from './crypt-body.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CryptBodyComponent],
  exports: [CryptBodyComponent]
})
export class CryptBodyComponentModule {}
