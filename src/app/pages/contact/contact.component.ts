import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section with Animation -->
      <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('assets/pattern.svg')] bg-[length:100px_100px]"></div>
        <div class="container mx-auto px-4 relative z-10" [@fadeIn]>
          <div class="max-w-3xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Бізбен байланысыңыз</h1>
            <p class="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Сұрақтарыңыз болса, бізге хабарласыңыз. Біз сізге 24 сағат ішінде жауап береміз.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Contact Form Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Contact Form -->
            <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100" [@slideInLeft]>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Хабарласу формасы</h2>
              
              <form class="space-y-6" (submit)="submitForm()" #contactForm="ngForm">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Аты-жөніңіз</label>
                  <input 
                    type="text" 
                    id="name" 
                    [(ngModel)]="formData.name" 
                    name="name"
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Атыңызды енгізіңіз"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Электрондық пошта</label>
                  <input 
                    type="email" 
                    id="email" 
                    [(ngModel)]="formData.email" 
                    name="email"
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="example@email.com"
                  >
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Тақырып</label>
                  <input 
                    type="text" 
                    id="subject" 
                    [(ngModel)]="formData.subject" 
                    name="subject"
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Хабарлама тақырыбы"
                  >
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Хабарлама</label>
                  <textarea 
                    id="message" 
                    [(ngModel)]="formData.message" 
                    name="message"
                    rows="5"
                    required
                    class="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Хабарламаңызды осы жерге енгізіңіз..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    [disabled]="!contactForm.valid || isSubmitting"
                    [class.opacity-50]="!contactForm.valid || isSubmitting"
                    class="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                  >
                    <span *ngIf="!isSubmitting">Хабарлама жіберу</span>
                    <span *ngIf="isSubmitting" class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Жіберілуде...
                    </span>
                  </button>
                </div>
              </form>
            </div>
            
            <!-- Contact Info -->
            <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100" [@slideInRight]>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Байланыс ақпараты</h2>
              
              <div class="space-y-8">
                <!-- Contact Item 1 -->
                <div class="flex items-start group">
                  <div class="flex-shrink-0 bg-primary-100/20 p-3 rounded-xl group-hover:bg-primary-600/10 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 group-hover:text-primary-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Телефон</h3>
                    <p class="mt-1 text-gray-600">+7 (777) 123-45-67</p>
                    <p class="mt-2 text-sm text-gray-500">Дүйсенбі-Жұма, 09:00 - 18:00</p>
                  </div>
                </div>
                
                <!-- Contact Item 2 -->
                <div class="flex items-start group">
                  <div class="flex-shrink-0 bg-blue-100/20 p-3 rounded-xl group-hover:bg-blue-600/10 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Электрондық пошта</h3>
                    <p class="mt-1 text-gray-600">info&#64;skillup.kz</p>
                    <p class="mt-1 text-gray-600">support&#64;skillup.kz</p>
                    <p class="mt-2 text-sm text-gray-500">24 сағат ішінде жауап береміз</p>
                  </div>
                </div>
                
                <!-- Contact Item 3 -->
                <div class="flex items-start group">
                  <div class="flex-shrink-0 bg-green-100/20 p-3 rounded-xl group-hover:bg-green-600/10 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Кеңсе</h3>
                    <p class="mt-1 text-gray-600">Қазақстан, Алматы</p>
                    <p class="mt-1 text-gray-600">Абай көшесі 8, 3-қабат</p>
                    <p class="mt-2 text-sm text-gray-500">Жұмыс уақыты: 09:00 - 18:00</p>
                  </div>
                </div>
                
                <!-- Social Media -->
                <div class="pt-4">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">Әлеуметтік желілер</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                      <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                      <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors" aria-label="Twitter">
                      <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-red-600 transition-colors" aria-label="YouTube">
                      <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Map Section -->
      <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <div class="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.776530500682!2d76.91521531548404!3d43.23502187913778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2sAbay%20St%208%2C%20Almaty%20050000!5e0!3m2!1sen!2skz!4v1636546787899!5m2!1sen!2skz" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
    
    <app-footer></app-footer>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ],
  styles: [`
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;

  submitForm() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Форма отправлена:', this.formData);
      this.showSuccessMessage();
      this.isSubmitting = false;
    }, 1500);
  }
  
  showSuccessMessage() {
    alert('Рахмет! Хабарламаңыз сәтті жіберілді. Біз сізге жауап береміз.');
    this.resetForm();
  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}