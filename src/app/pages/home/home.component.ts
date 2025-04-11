import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfessionCardComponent } from '../../components/profession-card/profession-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, ProfessionCardComponent],
  template: `
    <app-header></app-header>
    
    <main>
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 md:py-32 overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 opacity-10 bg-dots-pattern"></div>
        
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div class="absolute -top-20 -left-20 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Өз болашағыңды <span class="text-secondary-400 relative">
                <span class="relative z-10">бүгіннен</span>
                <span class="absolute bottom-0 left-0 w-full h-2 bg-secondary-400 opacity-30 rounded-full -rotate-1"></span>
              </span> бастап жоспарла!
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100/90 animate-fade-in-up animate-delay-100">
              Дұрыс мамандық таңдауға көмектесетін инновациялық платформа
            </p>
            
            <!-- Video Preview Card -->
            <div class="mb-12 animate-fade-in-up animate-delay-200">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-1 max-w-3xl mx-auto border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-white/30">
                <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
                  <div class="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-700/30 flex items-center justify-center">
                    <button class="absolute inset-0 flex items-center justify-center group" aria-label="Play video">
                      <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </button>
                    <span class="absolute bottom-6 left-6 text-lg font-medium text-white/90">Қысқаша таныстыру видеосы</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-300">
              <a 
                routerLink="/test" 
                class="relative overflow-hidden bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group"
              >
                <span class="relative z-10 flex items-center">
                  Тесттен өту
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a 
                routerLink="/professions" 
                class="relative overflow-hidden bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center border-2 border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl group"
              >
                <span class="relative z-10">Мамандықтарды қарау</span>
                <span class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Scrolling Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
      
      <!-- Features Section -->
      <section class="py-20 bg-gray-50 relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full opacity-10"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100 rounded-full opacity-10"></div>
        
        <div class="container mx-auto px-4 relative">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="relative z-10">SkillUp - сізге қалай көмектеседі?</span>
              <span class="absolute bottom-0 left-0 w-full h-2 bg-secondary-400 opacity-20 rounded-full -rotate-1"></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              Біздің платформа жастарға өз қабілеттерін ашып, дұрыс кәсіп таңдауға көмектеседі
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Қызығушылық тесті</h3>
              <p class="text-gray-600">
                Психологиялық және логикалық сұрақтар арқылы сіздің қабілеттеріңізді анықтаймыз
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Мамандықтар ақпараты</h3>
              <p class="text-gray-600">
                300+ мамандық туралы толық ақпарат: жалақы, сұраныс, қажетті дағдылар
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Мамандардың кеңестері</h3>
              <p class="text-gray-600">
                Түрлі сала мамандарымен сұхбаттар және кәсіби кеңестер
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Popular Professions Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="relative z-10">Танымал мамандықтар</span>
              <span class="absolute bottom-0 left-0 w-full h-2 bg-secondary-400 opacity-20 rounded-full -rotate-1"></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              Қазіргі уақытта ең көп сұранысқа ие мамандықтар
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-profession-card 
              *ngFor="let profession of popularProfessions" 
              [profession]="profession"
              class="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            ></app-profession-card>
          </div>
          
          <div class="text-center mt-16">
            <a 
              routerLink="/professions" 
              class="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-md text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-105"
            >
              Барлық мамандықтарды қарау
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <!-- Testimonials Section -->
      <section class="py-20 bg-gray-50 relative overflow-hidden">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full opacity-10"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100 rounded-full opacity-10"></div>
        
        <div class="container mx-auto px-4 relative">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span class="relative z-10">Пайдаланғандардың пікірлері</span>
              <span class="absolute bottom-0 left-0 w-full h-2 bg-secondary-400 opacity-20 rounded-full -rotate-1"></span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">
              Біздің платформаны пайдаланған студенттер мен оқушылардың пікірлері
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let testimonial of testimonials" class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="h-14 w-14 rounded-full bg-gray-200 overflow-hidden shadow-inner">
                  <img [src]="testimonial.avatar" [alt]="testimonial.name" class="h-full w-full object-cover">
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-sm text-gray-500">{{ testimonial.profession }}</p>
                </div>
              </div>
              <div class="relative">
                <svg class="absolute -top-6 -left-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="text-gray-600 relative z-10 pl-6">"{{ testimonial.comment }}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="relative py-24 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
        <!-- Background with CSS dots pattern -->
        <div class="absolute inset-0 opacity-10 bg-dots-pattern"></div>
        
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div class="absolute -top-20 -left-20 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Өз болашағыңды қазір баста!</h2>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Тесттен өтіп, өзіңізге лайықты мамандықты табыңыз
          </p>
          <a 
            routerLink="/test" 
            class="inline-flex items-center px-10 py-5 border border-transparent text-xl font-bold rounded-full shadow-xl text-primary-900 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transition-all duration-300 transform hover:scale-105"
          >
            Тестті бастау
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </main>
    
    <app-footer></app-footer>
  `,
  styles: [`
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .animate-delay-100 {
      animation-delay: 0.1s;
    }
    
    .animate-delay-200 {
      animation-delay: 0.2s;
    }
    
    .animate-delay-300 {
      animation-delay: 0.3s;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .bg-dots-pattern {
      background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px);
      background-size: 20px 20px;
    }
  `]
})
export class HomeComponent {
  popularProfessions = [
    {
      id: 1,
      title: 'Деректер талдаушысы',
      category: 'IT',
      description: 'Деректерді жинау, талдау және оларды бизнес шешімдеріне айналдыру',
      salary: '300 000 - 600 000 ₸',
      demand: 'Жоғары сұраныс',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Жасанды интеллект инженері',
      category: 'IT',
      description: 'AI модельдерін әзірлеу және оларды бизнес үдерістеріне енгізу',
      salary: '400 000 - 800 000 ₸',
      demand: 'Өте жоғары сұраныс',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Медициналық биолог',
      category: 'Медицина',
      description: 'Жаңа дәрі-дәрмектерді зерттеу және дамыту',
      salary: '250 000 - 500 000 ₸',
      demand: 'Орташа сұраныс',
      icon: '🧬'
    }
  ];

  testimonials = [
    {
      name: 'Айгерім Смағұлова',
      profession: 'Студент, КБТУ',
      comment: 'SkillUp арқылы мен өзіме лайықты мамандықты таптым. Енді мен IT саласында білім алып жатырмын!',
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    {
      name: 'Арман Жұмашев',
      profession: 'Студент, НУ',
      comment: 'Тест нәтижелері менің қабілеттерімді толығырақ түсінуге көмектесті. Керемет платформа!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Диана Ибраева',
      profession: 'Мектеп оқушысы',
      comment: 'Мамандықтар туралы ақпарат өте пайдалы болды. Енді мен болашақ мамандығымды нақты білемін.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];
}