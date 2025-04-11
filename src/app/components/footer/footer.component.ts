import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 shadow-2xl">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <!-- Brand Info -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-secondary-600">
                SkillUp
              </span>
            </div>
            <p class="text-gray-400 leading-relaxed">
              Жастарға дұрыс мамандық таңдауға көмектесетін инновациялық платформа
            </p>
            <div class="flex space-x-4 pt-2">
              <a 
                *ngFor="let social of socialLinks" 
                [href]="social.url" 
                target="_blank"
                class="text-gray-400 hover:text-white transition-colors duration-300 hover:-translate-y-1"
                [attr.aria-label]="social.name"
              >
                <span [innerHTML]="social.icon" class="h-6 w-6"></span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold uppercase tracking-wider mb-6 relative inline-block">
              <span class="relative z-10">Тез сілтемелер</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 rounded-full opacity-30"></span>
            </h3>
            <ul class="space-y-3">
              <li *ngFor="let link of quickLinks">
                <a 
                  [routerLink]="link.path" 
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold uppercase tracking-wider mb-6 relative inline-block">
              <span class="relative z-10">Байланыс</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 rounded-full opacity-30"></span>
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@skillup.kz" class="text-gray-400 hover:text-white transition-colors duration-300">
                  info&#64;skillup.kz
                </a>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+77771234567" class="text-gray-400 hover:text-white transition-colors duration-300">
                  +7 777 123 4567
                </a>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-400">Алматы, Қазақстан</span>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h3 class="text-lg font-semibold uppercase tracking-wider mb-6 relative inline-block">
              <span class="relative z-10">Жаңалықтар</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 rounded-full opacity-30"></span>
            </h3>
            <p class="text-gray-400 mb-4">
              Жаңалықтар мен арнайы ұсыныстарға жазылыңыз
            </p>
            <form class="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Электрондық поштаңыз" 
                class="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white placeholder-gray-400"
                required
              >
              <button 
                type="submit" 
                class="px-6 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
              >
                Жазылу
              </button>
            </form>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} SkillUp. Барлық құқықтар қорғалған.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a 
              *ngFor="let link of legalLinks" 
              [routerLink]="link.path" 
              class="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              {{ link.title }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>`
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    }
  ];

  quickLinks = [
    { path: '/', title: 'Басты бет' },
    { path: '/test', title: 'Кәсіби тест' },
    { path: '/professions', title: 'Мамандықтар' },
    { path: '/blog', title: 'Блог' },
    { path: '/contact', title: 'Байланыс' }
  ];

  legalLinks = [
    { path: '/privacy', title: 'Құпиялылық саясаты' },
    { path: '/terms', title: 'Қызмет көрсету шарттары' },
    { path: '/cookies', title: 'Cookie файлдары' }
  ];
}