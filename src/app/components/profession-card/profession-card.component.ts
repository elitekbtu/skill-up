import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-profession-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div 
      class="profession-card h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
      [@cardHover]="hoverState"
      (mouseenter)="hoverState = 'hovered'"
      (mouseleave)="hoverState = 'normal'"
      [routerLink]="['/professions', profession.id]"
    >
      <div class="p-6 flex-grow">
        <div class="flex items-start justify-between mb-4 gap-2">
          <h3 class="text-xl font-bold text-gray-900">{{ profession.title }}</h3>
          <span class="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
            {{ profession.category }}
          </span>
        </div>
        
        <p class="text-gray-600 mb-6 line-clamp-3">{{ profession.description }}</p>
        
        <div class="space-y-3">
          <div class="flex items-center">
            <div class="bg-primary-100/30 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-500">Орташа жалақы</p>
              <p class="text-gray-700 font-medium">{{ profession.salary }}</p>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="bg-blue-100/30 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-500">Нарықтағы сұраныс</p>
              <p class="text-gray-700">{{ profession.demand }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'translateY(0)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      })),
      state('hovered', style({
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      })),
      transition('normal <=> hovered', [
        animate('0.2s ease-in-out')
      ])
    ])
  ],
  styles: [`
    .profession-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ProfessionCardComponent {
  @Input() profession: any;
  hoverState: 'normal' | 'hovered' = 'normal';
}