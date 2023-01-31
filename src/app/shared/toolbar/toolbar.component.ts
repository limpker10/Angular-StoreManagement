import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleNavbar = new EventEmitter<boolean>();

  private isToggle = false
  
  toggle() : void {
    this.isToggle = !this.isToggle
    this.toggleNavbar.emit(this.isToggle)
  }
}
