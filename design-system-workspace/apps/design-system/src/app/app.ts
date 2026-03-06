import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button, BUTTON_TOKEN, Highlighter, MButton } from '@methrax/ui';

@Component({
  standalone: true, // required for inject()
  imports: [RouterModule, CommonModule, Button, Highlighter],
  selector: 'dso-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // correct property
})
export class App {
  protected title = 'design-system';

  onClick() {
    console.log('sdsf');
    alert('Button clicked!');
  }
}
