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
          this.toggleBodyScroll(false);
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
    // Only show overlay for small screens
    if (this.isSmallScreen) {
      this.toggleBodyScroll(this.isSidebarVisible);
    }
  }

  private scrollPosition = 0;

  toggleBodyScroll(disable: boolean): void {
    if (!this.isBrowser) return;

    if (disable) {
      // Store current scroll position
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Freeze the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll
      const scrollY = this.scrollPosition;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    }
  }
}
