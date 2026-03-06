import { Component } from '@angular/core';
import { ButtonAdapter } from '../../ui-core/adapters/button.adapter';

@Component({
  selector: 'm-button',
  template: `<button>M Button</button>`,
})
export class MButton extends ButtonAdapter {}
