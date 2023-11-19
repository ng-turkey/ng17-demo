import { Component, Input, NgModule } from '@angular/core';

@Component({
  template: '{{text}}',
  selector: 'app-scam-text',
})
export class SCAMTextComponent {
  @Input({ required: true }) text!: string;
}

@NgModule({
  declarations: [SCAMTextComponent],
  exports: [SCAMTextComponent],
})
export class SCAMTextComponentModule {}
