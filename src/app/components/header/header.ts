import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  @Output() toggleSidebar = new EventEmitter<void>();
}
