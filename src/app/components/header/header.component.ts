import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a 
            routerLink="/" 
            class="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            aria-label="SkillUp Home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-500">
              SkillUp
            </span>
          </a>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li *ngFor="let link of navLinks">
                <a 
                  [routerLink]="link.path" 
                  routerLinkActive="text-secondary-400 font-medium"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="relative px-2 py-1 hover:text-secondary-300 transition-colors duration-300 group"
                >
                  {{ link.title }}
                  <span 
                    class="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full"
                    [class.w-full]="link.active"
                  ></span>
                </a>
              </li>
            </ul>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400"
            (click)="toggleMobileMenu()"
            aria-label="Toggle menu"
            [attr.aria-expanded]="isMobileMenuOpen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                [attr.d]="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" 
              />
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMobileMenuOpen"
          [class.max-h-96]="isMobileMenuOpen"
        >
          <ul class="flex flex-col space-y-3 py-4 px-2">
            <li *ngFor="let link of navLinks">
              <a 
                [routerLink]="link.path" 
                routerLinkActive="text-secondary-400 font-medium bg-white bg-opacity-10"
                [routerLinkActiveOptions]="{ exact: true }"
                class="block px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
                (click)="isMobileMenuOpen = false"
              >
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .router-link-active:not(.text-secondary-400) {
      color: rgba(255, 255, 255, 0.9);
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  
  navLinks = [
    { path: '/', title: 'Басты бет', active: false },
    { path: '/test', title: 'Тест', active: false },
    { path: '/professions', title: 'Мамандықтар', active: false },
    { path: '/contact', title: 'Байланыс', active: false }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}