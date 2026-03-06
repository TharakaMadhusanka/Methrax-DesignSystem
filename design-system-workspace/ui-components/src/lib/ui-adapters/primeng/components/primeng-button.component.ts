import { Component } from '@angular/core';
import { ButtonAdapter } from '../../../ui-core/adapters/button.adapter';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'm-primebutton',
  template: `<p-button [label]="'button'"></p-button>`,
  imports: [ButtonModule],
})
export class PrimengButton extends ButtonAdapter {}
