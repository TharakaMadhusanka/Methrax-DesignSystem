import { Directive, EventEmitter, Output, output } from '@angular/core';
@Directive()
export abstract class ButtonAdapter {
  // Inputs
  protected _label?: string;

  // Events
  @Output() onclick = new EventEmitter<boolean>();
}
