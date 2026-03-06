import {
  AfterViewInit,
  ApplicationRef,
  HostBinding,
  Component,
  Directive,
  HostListener,
  inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BUTTON_TOKEN } from '../../ui-core/tokens/button.token';
import { PrimengButton } from '../../ui-adapters/primeng/components/primeng-button.component';
import { MButton } from '../../ui-adapters/methrax/m-button.component';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { TooltipOptions } from 'primeng/api';

@Component({
  selector: 'm-button',
  template: `<ng-container #buttonCompRef></ng-container>`,
  imports: [TooltipModule],
    providers: [{
    provide: BUTTON_TOKEN,
    useValue: MButton
  }],
})
export class Button implements AfterViewInit {
  @ViewChild('buttonCompRef', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private adapter = inject(BUTTON_TOKEN);

  ngAfterViewInit(): void {
    const component = this.container.createComponent(this.adapter);
    component.instance.onclick.subscribe((x) => console.log(x));
  }
}

// Dynamic Directive Binding
@Directive({
  selector: '[mHighlight]',
  hostDirectives: [{
    directive: Tooltip,
    inputs: ['tooltipOptions: tooltipOptions']
  }],
  providers: [TooltipModule]
})
export class Highlighter {
  @Input() tooltipPosition = 'bottom';

  tooltipOptions: TooltipOptions = {
    tooltipLabel: 'Help me!',
  }

  // @HostBinding('style.background')
  // background!: string;

  // @HostListener('mouseenter')
  // enter() {
  //   this.tooltipOptions.tooltipLabel = 'Help ME';
  //   console.log('Here I am');
  // }

  // @HostListener('mouseleave')
  // leave() {
  //   this.background = '';
  // }
}
