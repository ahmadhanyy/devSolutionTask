import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Router, NavigationEnd,RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss'],
})
export class MainLayout {
  isSidebarVisible = true;
  isSmallScreen = false;
  private isBrowser = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Detect browser (to avoid SSR window errors)
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
        // Restore scroll when navigating (mobile fix)
        if (this.isSmallScreen) {
          this.isSidebarVisible = false;
        }
      }
    });

    // Run screen size logic only in browser
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkRoute(url: string) {
    this.isSidebarVisible = !this.isSmallScreen || !this.isBrowser;
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (!this.isBrowser) return;
    this.isSmallScreen = window.innerWidth < 1000;
    this.isSidebarVisible = !this.isSmallScreen;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
