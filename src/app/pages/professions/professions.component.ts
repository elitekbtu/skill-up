import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfessionCardComponent } from '../../components/profession-card/profession-card.component';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-professions',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProfessionCardComponent, FormsModule],
  template: `
    <app-header></app-header>

    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-[url('assets/pattern.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Қазіргі заманғы мамандықтар каталогы</h1>
            <p class="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Болашақта сұранысқа ие болатын 300+ мамандық туралы толық ақпарат
            </p>
          </div>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="bg-white py-8 shadow-sm sticky top-0 z-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Сала</label>
              <select
                id="category"
                class="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg shadow-sm transition-all"
                [(ngModel)]="selectedCategory"
              >
                <option value="">Барлық салалар</option>
                <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
              </select>
            </div>

            <div>
              <label for="demand" class="block text-sm font-medium text-gray-700 mb-1">Сұраныс</label>
              <select
                id="demand"
                class="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg shadow-sm transition-all"
                [(ngModel)]="selectedDemand"
              >
                <option value="">Барлық сұраныс деңгейлері</option>
                <option value="high">Жоғары сұраныс</option>
                <option value="medium">Орташа сұраныс</option>
                <option value="low">Төмен сұраныс</option>
              </select>
            </div>

            <div>
              <label for="salary" class="block text-sm font-medium text-gray-700 mb-1">Жалақы</label>
              <select
                id="salary"
                class="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg shadow-sm transition-all"
                [(ngModel)]="selectedSalary"
              >
                <option value="">Барлық жалақы деңгейлері</option>
                <option value="high">300 000 ₸ жоғары</option>
                <option value="medium">150 000 - 300 000 ₸</option>
                <option value="low">150 000 ₸ төмен</option>
              </select>
            </div>

            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                placeholder="Мамандық іздеу..."
                class="block w-full pl-10 pr-4 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg shadow-sm transition-all"
                [(ngModel)]="searchQuery"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Results Section -->
      <section class="py-12 bg-gray-50" [@fadeIn]>
        <div class="container mx-auto px-6">
          <div class="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 class="text-2xl font-bold text-gray-900">
              <span class="text-primary-600">{{ filteredProfessions.length }}</span> мамандық табылды
            </h2>
            
            <div class="flex items-center gap-3">
              <button
                (click)="resetFilters()"
                class="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                [class.hidden]="!hasActiveFilters"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Сүзгілерді қалпына келтіру
              </button>
              
              <div class="flex items-center">
                <label for="sort" class="text-sm text-gray-500 mr-2 whitespace-nowrap">Сұрыптау:</label>
                <select
                  id="sort"
                  class="block pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-lg shadow-sm transition-all"
                  [(ngModel)]="sortOption"
                >
                  <option value="name">Аты бойынша</option>
                  <option value="salary">Жалақы бойынша</option>
                  <option value="demand">Сұраныс бойынша</option>
                </select>
              </div>
            </div>
          </div>

          <div *ngIf="filteredProfessions.length > 0; else noResults" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" [@stagger]>
            <app-profession-card
              *ngFor="let profession of filteredProfessions"
              [profession]="profession"
              class="hover:scale-[1.02] transition-transform duration-300"
            ></app-profession-card>
          </div>

          <ng-template #noResults>
            <div class="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="mt-4 text-xl font-medium text-gray-900">Мамандықтар табылмады</h3>
              <p class="mt-2 text-gray-500 max-w-md mx-auto">Сіздің сүзгі параметрлеріңізге сәйкес мамандықтар табылмады. Басқа параметрлерді қолданып көріңіз.</p>
              <button
                (click)="resetFilters()"
                class="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
              >
                Барлық сүзгілерді жою
              </button>
            </div>
          </ng-template>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styles: [`
    .profession-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `]
})
export class ProfessionsComponent {
  categories = ['IT', 'Медицина', 'Инженерия', 'Педагогика', 'Экономика', 'Құқық', 'Дизайн', 'Маркетинг', 'Сауда'];

  professions = [
    {
      id: 1,
      title: 'Деректер талдаушысы',
      category: 'IT',
      description: 'Деректерді жинау, талдау және оларды бизнес шешімдеріне айналдыру. Үлкен деректер жинақтарымен жұмыс жасау.',
      salary: '300 000 - 600 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Python', 'SQL', 'Machine Learning']
    },
    {
      id: 2,
      title: 'AI инженері',
      category: 'IT',
      description: 'Жасанды интеллект модельдерін әзірлеу және оларды бизнес үдерістеріне енгізу. Deep Learning технологиялары.',
      salary: '400 000 - 800 000 ₸',
      demand: 'Өте жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Python', 'TensorFlow', 'Neural Networks']
    },
    {
      id: 3,
      title: 'Биоинформатик',
      category: 'Медицина',
      description: 'Биологиялық деректерді талдау және геномикалық зерттеулер жүргізу. ДНК талдаулары.',
      salary: '350 000 - 650 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Bioinformatics', 'Python', 'Genomics']
    },
    {
      id: 4,
      title: 'Фронтенд әзірлеуші',
      category: 'IT',
      description: 'Заманауи веб-қосымшаларды әзірлеу. React, Angular немесе Vue.js қолдану.',
      salary: '350 000 - 700 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'high',
      skills: ['JavaScript', 'React', 'CSS']
    },
    {
      id: 5,
      title: 'STEM мұғалімі',
      category: 'Педагогика',
      description: 'Ғылым, технология, инженерия және математика салаларында оқу бағдарламаларын жүргізу.',
      salary: '200 000 - 400 000 ₸',
      demand: 'Орташа сұраныс',
      salaryValue: 'medium',
      skills: ['Педагогика', 'STEM', 'Оқыту әдістемесі']
    },
    {
      id: 6,
      title: 'Финанс аналитигі',
      category: 'Экономика',
      description: 'Компания қаржысын талдау және стратегиялық ұсыныстар әзірлеу. Инвестициялық талдаулар.',
      salary: '300 000 - 600 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Финансы', 'Excel', 'Қаржылық модельдеу']
    },
    {
      id: 7,
      title: 'UX/UI дизайнері',
      category: 'Дизайн',
      description: 'Пайдаланушы тәжірибесін жақсарту және интерфейстерді дизайндау. Прототиптеу және тестирование.',
      salary: '300 000 - 600 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      id: 8,
      title: 'Ауыл шаруашылығы инженері',
      category: 'Инженерия',
      description: 'Ауыл шаруашылық техникасын жобалау және оны жетілдіру. Дәнді дақылдардың өнімділігін арттыру.',
      salary: '250 000 - 450 000 ₸',
      demand: 'Орташа сұраныс',
      salaryValue: 'medium',
      skills: ['Агроинженерия', 'Жерге орналастыру', 'Құрылыс']
    },
    {
      id: 9,
      title: 'Генетик',
      category: 'Медицина',
      description: 'Генетикалық зерттеулер жүргізу және гендік ауруларды диагностикалау. ДНК тестілеу.',
      salary: '400 000 - 700 000 ₸',
      demand: 'Өте жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Генетика', 'Биохимия', 'Молекулалық биология']
    },
    {
      id: 10,
      title: 'Киберқауіпсіздік маманы',
      category: 'IT',
      description: 'Ақпараттық қауіпсіздікті қамтамасыз ету. Хакерлік шабуылдардың алдын алу.',
      salary: '450 000 - 900 000 ₸',
      demand: 'Өте жоғары сұраныс',
      salaryValue: 'high',
      skills: ['Ethical Hacking', 'Network Security', 'Cryptography']
    },
    {
      id: 11,
      title: 'Экологиялық инженер',
      category: 'Инженерия',
      description: 'Қоршаған ортаны қорғау жүйелерін жобалау. Ластануды мониторингілеу.',
      salary: '300 000 - 550 000 ₸',
      demand: 'Орташа сұраныс',
      salaryValue: 'medium',
      skills: ['Экология', 'Қоршаған ортаны қорғау', 'Су ресурстары']
    },
    {
      id: 12,
      title: 'Диджитал маркетолог',
      category: 'Маркетинг',
      description: 'Интернет-маркетинг стратегияларын әзірлеу және жүзеге асыру. SMM, контент-маркетинг.',
      salary: '250 000 - 500 000 ₸',
      demand: 'Жоғары сұраныс',
      salaryValue: 'medium',
      skills: ['SEO', 'Google Ads', 'Контент стратегиясы']
    }, 
    {
      id: 13,
      title: "SMM-менеджер",
      category: "Маркетинг",
      description: "Социальные медиа платформаларында брендті қолдау және аудиториямен байланыс орнату. Контент жасау және талдау.",
      salary: "200 000 - 400 000 ₸",
      demand: "Жоғары сұраныс",
      salaryValue: "medium",
      skills: ["Копирайтинг", "Таргеттік жарнама", "Instagram/Facebook аналитикасы"]
    }, 
    {
      id: 14,
      title: "SEO-специалист",
      category: "Маркетинг",
      description: "Веб-сайттарды іздеу жүйелеріне оңтайландыру. Органикалық трафикті арттыру.",
      salary: "300 000 - 600 000 ₸",
      demand: "Орташа сұраныс",
      salaryValue: "high",
      skills: ["Google Analytics", "Ahrefs/SEMrush", "Техникалық SEO"]
    },
    {
      id: 15,
      title: "PPC-менеджер",
      category: "Маркетинг",
      description: "Google Ads және басқа платформаларда ақылы жарнамалық науқандарды басқару.",
      salary: "250 000 - 450 000 ₸",
      demand: "Жоғары сұраныс",
      salaryValue: "medium",
      skills: ["Google Ads", "Meta Ads", "Конверсиялық баптау"]
    }
  ];

  selectedCategory = '';
  selectedDemand = '';
  selectedSalary = '';
  searchQuery = '';
  sortOption = 'name';

  get hasActiveFilters(): boolean {
    return !!this.selectedCategory || !!this.selectedDemand || !!this.selectedSalary || !!this.searchQuery;
  }

  get filteredProfessions() {
    let result = [...this.professions];

    // Apply filters
    if (this.selectedCategory) {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.selectedDemand) {
      if (this.selectedDemand === 'high') {
        result = result.filter(p => p.demand.includes('жоғары'));
      } else if (this.selectedDemand === 'medium') {
        result = result.filter(p => p.demand.includes('Орташа'));
      } else if (this.selectedDemand === 'low') {
        result = result.filter(p => p.demand.includes('Төмен'));
      }
    }

    if (this.selectedSalary) {
      if (this.selectedSalary === 'high') {
        result = result.filter(p => p.salaryValue === 'high');
      } else if (this.selectedSalary === 'medium') {
        result = result.filter(p => p.salaryValue === 'medium');
      } else if (this.selectedSalary === 'low') {
        result = result.filter(p => p.salaryValue === 'low');
      }
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.skills?.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    if (this.sortOption === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'salary') {
      result.sort((a, b) => {
        if (a.salaryValue === b.salaryValue) return 0;
        if (a.salaryValue === 'high') return -1;
        if (b.salaryValue === 'high') return 1;
        if (a.salaryValue === 'medium') return -1;
        if (b.salaryValue === 'medium') return 1;
        return 0;
      });
    } else if (this.sortOption === 'demand') {
      result.sort((a, b) => {
        if (a.demand === b.demand) return 0;
        if (a.demand.includes('Өте жоғары')) return -1;
        if (b.demand.includes('Өте жоғары')) return 1;
        if (a.demand.includes('Жоғары')) return -1;
        if (b.demand.includes('Жоғары')) return 1;
        if (a.demand.includes('Орташа')) return -1;
        if (b.demand.includes('Орташа')) return 1;
        return 0;
      });
    }

    return result;
  }

  resetFilters() {
    this.selectedCategory = '';
    this.selectedDemand = '';
    this.selectedSalary = '';
    this.searchQuery = '';
    this.sortOption = 'name';
  }
}