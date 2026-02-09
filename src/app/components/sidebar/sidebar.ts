import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLinkActive } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
  @Output() isSidebarClicked = new EventEmitter<void>();

  toggleSidebar(){
    this.isSidebarClicked.emit();
  }
}
