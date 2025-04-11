import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TestQuestionComponent } from '../../components/test-question/test-question.component';
import { trigger, transition, style, animate } from '@angular/animations';

interface Question {
  id: number;
  text: string;
  options: { value: number; text: string }[];
}

interface TestResult {
  profession: string;
  match: number;
  description: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent, TestQuestionComponent],
  template: `
    <app-header></app-header>

    <main class="min-h-screen bg-gray-50">
      <!-- Progress Bar -->
      <div class="bg-gradient-to-r from-primary-500 to-primary-600 py-4 shadow-md">
        <div class="container mx-auto px-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-sm font-medium text-white">
                Сұрақ <span class="font-bold">{{ currentQuestionIndex + 1 }}</span> / {{ questions.length }}
              </span>
            </div>
            <div class="w-full max-w-md bg-white/30 rounded-full h-2.5">
              <div
                class="bg-white h-2.5 rounded-full transition-all duration-500 ease-out"
                [style.width]="(currentQuestionIndex + 1) / questions.length * 100 + '%'"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-8 md:py-12">
        <div class="container mx-auto px-6 max-w-3xl">
          <div *ngIf="!testCompleted; else results" @fadeInOut>
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-6 px-2">
                {{ questions[currentQuestionIndex].text }}
              </h3>
              <app-test-question
                [question]="questions[currentQuestionIndex]"
                (answerSelected)="onAnswerSelected($event)"
              ></app-test-question>
            </div>

            <div class="flex justify-between mt-8">
              <button
                *ngIf="currentQuestionIndex > 0"
                (click)="prevQuestion()"
                class="px-5 py-2.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm"
              >
                Артқа
              </button>
              <div *ngIf="currentQuestionIndex === 0"></div>

              <button
                *ngIf="currentQuestionIndex < questions.length - 1"
                (click)="nextQuestion()"
                [disabled]="!answers[currentQuestionIndex]"
                [ngClass]="{
                  'opacity-50 cursor-not-allowed': !answers[currentQuestionIndex],
                  'hover:bg-primary-700': answers[currentQuestionIndex]
                }"
                class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 transition-all duration-300 shadow-sm"
              >
                Келесі
              </button>

              <button
                *ngIf="currentQuestionIndex === questions.length - 1"
                (click)="completeTest()"
                [disabled]="!answers[currentQuestionIndex]"
                [ngClass]="{
                  'opacity-50 cursor-not-allowed': !answers[currentQuestionIndex],
                  'hover:bg-secondary-600': answers[currentQuestionIndex]
                }"
                class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-secondary-500 transition-all duration-300 shadow-sm"
              >
                Тестті аяқтау
              </button>
            </div>
          </div>

          <ng-template #results>
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center" @fadeInUp> 
             <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Тест аяқталды!</h2>
              <p class="text-gray-600 mb-6 md:mb-8">
                Сіздің қызығушылықтарыңызға және қабілеттеріңізге сәйкес келетін мамандықтар:
              </p>

              <div class="grid gap-5 mb-8">
                <div 
                  *ngFor="let result of testResults; let i = index" 
                  class="border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  [style.animation-delay]="i * 100 + 'ms'"
                  @staggerItem
                >
                  <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-semibold text-gray-900">{{ result.profession }}</h3>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {{ result.match }}% сәйкестік
                    </span>
                  </div>
                  <p class="text-gray-600 text-left text-sm md:text-base">{{ result.description }}</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  (click)="restartTest()"
                  class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm"
                >
                  Тестті қайта бастау
                </button>
                <button
                  [routerLink]="['/professions']"
                  class="px-5 py-2.5 border border-primary-300 text-sm font-medium rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 transition-all duration-300 shadow-sm"
                >
                  Мамандықтарды қарау
                </button>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', 
        style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class TestComponent {
  questions: Question[] = [
    {
      id: 1,
      text: 'Сіз қандай пәндерді оқуға қызығасыз?',
      options: [
        { value: 1, text: 'Математика және информатика' },
        { value: 2, text: 'Жаратылыстану ғылымдары (физика, химия, биология)' },
        { value: 3, text: 'Әлеуметтік ғылымдар (тарих, әлеуметтану, психология)' },
        { value: 4, text: 'Гуманитарлық ғылымдар (әдебиет, филология, философия)' }
      ]
    },
    {
      id: 2,
      text: 'Демалу кезінде сіз не істегенді ұнатасыз?',
      options: [
        { value: 1, text: 'Компьютерлік ойындар ойнау немесе бағдарлама жазу' },
        { value: 2, text: 'Тәжірибелер жасау немесе құрылыс конструкцияларын жинау' },
        { value: 3, text: 'Адамдармен сөйлесу немесе іскерлік жоспарлар жасау' },
        { value: 4, text: 'Кітап оқу немесе шығармашылықпен айналысу' }
      ]
    },
    {
      id: 3,
      text: 'Сіздің негізгі күшіңіз қандай?',
      options: [
        { value: 1, text: 'Логикалық ойлау және есептеу' },
        { value: 2, text: 'Талдау және бақылау' },
        { value: 3, text: 'Байланыс қабілеті және ұйымдастыру' },
        { value: 4, text: 'Шығармашылық және өміршеңдік' }
      ]
    },
    {
      id: 4,
      text: 'Болашақта қандай жұмыс ортасы сізге ұнайды?',
      options: [
        { value: 1, text: 'IT компаниясында жұмыс істеу' },
        { value: 2, text: 'Зертханада немесе өндірісте жұмыс істеу' },
        { value: 3, text: 'Үймек жұмыстар немесе бизнес ортасы' },
        { value: 4, text: 'Шығармашылық студия немесе мектеп/университет' }
      ]
    },
    {
      id: 5,
      text: 'Сіз қандай мәселелерді шешуге қызығасыз?',
      options: [
        { value: 1, text: 'Техникалық мәселелер' },
        { value: 2, text: 'Ғылыми мәселелер' },
        { value: 3, text: 'Әлеуметтік мәселелер' },
        { value: 4, text: 'Шығармашылық мәселелер' }
      ]
    }
  ];

  answers: (number | null)[] = Array(this.questions.length).fill(null);
  currentQuestionIndex = 0;
  testCompleted = false;

  testResults: TestResult[] = [];

  constructor(private router: Router) {}

  onAnswerSelected(answer: number) {
    this.answers[this.currentQuestionIndex] = answer;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  completeTest() {
    const professionScores: { [key: string]: number } = {
      'Деректер талдаушысы': 0,
      'Жасанды интеллект инженері': 0,
      'Медициналық биолог': 0,
      'Фронтенд әзірлеуші': 0,
      'Мұғалім': 0,
      'Бухгалтер': 0,
      'UX/UI дизайнері': 0,
      'Ауыл шаруашылығы инженері': 0,
      'Педиатр': 0
    };

    this.answers.forEach((answer, index) => {
      const questionNumber = index + 1;
      switch (questionNumber) {
        case 1:
          if (answer === 1) {
            professionScores['Деректер талдаушысы'] += 2;
            professionScores['Жасанды интеллект инженері'] += 2;
            professionScores['Фронтенд әзірлеуші'] += 1;
          } else if (answer === 2) {
            professionScores['Медициналық биолог'] += 2;
            professionScores['Жасанды интеллект инженері'] += 1;
            professionScores['Педиатр'] += 1;
          } else if (answer === 3) {
            professionScores['Мұғалім'] += 1;
            professionScores['Бухгалтер'] += 1;
            professionScores['Педиатр'] += 2;
          } else if (answer === 4) {
            professionScores['Мұғалім'] += 1;
            professionScores['UX/UI дизайнері'] += 1;
          }
          break;
        case 2:
          if (answer === 1) {
            professionScores['Деректер талдаушысы'] += 1;
            professionScores['Жасанды интеллект инженері'] += 1;
            professionScores['Фронтенд әзірлеуші'] += 2;
            professionScores['UX/UI дизайнері'] += 1;
          } else if (answer === 2) {
            professionScores['Медициналық биолог'] += 1;
            professionScores['Ауыл шаруашылығы инженері'] += 2;
          } else if (answer === 3) {
            professionScores['Бухгалтер'] += 2;
            professionScores['Мұғалім'] += 1;
            professionScores['Педиатр'] += 1;
          } else if (answer === 4) {
            professionScores['UX/UI дизайнері'] += 2;
            professionScores['Мұғалім'] += 1;
          }
          break;
        case 3:
          if (answer === 1) {
            professionScores['Деректер талдаушысы'] += 2;
            professionScores['Жасанды интеллект инженері'] += 2;
            professionScores['Бухгалтер'] += 1;
          } else if (answer === 2) {
            professionScores['Медициналық биолог'] += 2;
            professionScores['Бухгалтер'] += 1;
            professionScores['Педиатр'] += 1;
          } else if (answer === 3) {
            professionScores['Мұғалім'] += 2;
            professionScores['Бухгалтер'] += 2;
            professionScores['Педиатр'] += 1;
          } else if (answer === 4) {
            professionScores['Фронтенд әзірлеуші'] += 1;
            professionScores['UX/UI дизайнері'] += 2;
          }
          break;
        case 4:
          if (answer === 1) {
            professionScores['Деректер талдаушысы'] += 2;
            professionScores['Жасанды интеллект инженері'] += 2;
            professionScores['Фронтенд әзірлеуші'] += 2;
            professionScores['UX/UI дизайнері'] += 2;
          } else if (answer === 2) {
            professionScores['Медициналық биолог'] += 2;
            professionScores['Ауыл шаруашылығы инженері'] += 2;
            professionScores['Педиатр'] += 1;
          } else if (answer === 3) {
            professionScores['Бухгалтер'] += 2;
          } else if (answer === 4) {
            professionScores['Мұғалім'] += 2;
            professionScores['UX/UI дизайнері'] += 1;
            professionScores['Педиатр'] += 2;
          }
          break;
        case 5:
          if (answer === 1) {
            professionScores['Деректер талдаушысы'] += 2;
            professionScores['Жасанды интеллект инженері'] += 2;
            professionScores['Фронтенд әзірлеуші'] += 2;
            professionScores['Ауыл шаруашылығы инженері'] += 1;
          } else if (answer === 2) {
            professionScores['Медициналық биолог'] += 2;
            professionScores['Педиатр'] += 2;
          } else if (answer === 3) {
            professionScores['Мұғалім'] += 2;
          } else if (answer === 4) {
            professionScores['UX/UI дизайнері'] += 2;
          }
          break;
      }
    });

    const maxScore = this.questions.length * 2;
    this.testResults = Object.entries(professionScores)
      .map(([profession, score]) => ({
        profession,
        match: Math.round((score / maxScore) * 100),
        description: this.getProfessionDescription(profession)
      }))
      .sort((a, b) => b.match - a.match)
      .slice(0, 3);

    this.testCompleted = true;
  }

  getProfessionDescription(profession: string): string {
    switch (profession) {
      case 'Деректер талдаушысы':
        return 'Сіздің аналитикалық ойлау қабілетіңіз жоғары, деректерді талдауға және олардан қорытынды жасауға бейімсіз.';
      case 'Жасанды интеллект инженері':
        return 'Сіздің логикалық және математикалық қабілеттеріңіз жақсы дамыған, жаңа технологияларға қызығасыз.';
      case 'Медициналық биолог':
        return 'Сіз жаратылыстану ғылымдарына қызығасыз және зерттеу жүргізуге бейімсіз.';
      case 'Фронтенд әзірлеуші':
        return 'Сіздің шығармашылық қабілетіңіз бар және веб-технологияларды қолдануға қызығасыз.';
      case 'Мұғалім':
        return 'Сіз адамдармен жұмыс істеуді ұнатасыз, білім беруге және басқаларға көмектесуге бейімсіз.';
      case 'Бухгалтер':
        return 'Сіз ұқыптысыз, сандармен жұмыс істеуді ұнатасыз және жүйелі ойлау қабілетіңіз бар.';
      case 'UX/UI дизайнері':
        return 'Сіздің эстетикалық талғамыңыз жақсы дамыған және пайдаланушыға ыңғайлы интерфейстер жасауға қызығасыз.';
      case 'Ауыл шаруашылығы инженері':
        return 'Сіз техникаға және табиғатқа қызығасыз, практикалық мәселелерді шешуге бейімсіз.';
      case 'Педиатр':
        return 'Сіз балаларға жанашырлықпен қарайсыз және олардың денсаулығына қамқорлық жасауға бейімсіз.';
      default:
        return '';
    }
  }

  restartTest() {
    this.answers = Array(this.questions.length).fill(null);
    this.currentQuestionIndex = 0;
    this.testCompleted = false;
    this.testResults = [];
  }
}