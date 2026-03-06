import { ButtonAdapter } from '../adapters/button.adapter';
import { InjectionToken, Type } from '@angular/core';

export const BUTTON_TOKEN = new InjectionToken<Type<ButtonAdapter>>(
  'BUTTON_TOKEN',
);
