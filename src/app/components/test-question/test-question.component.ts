import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-test-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div 
      class="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      [@fadeIn]
    >
      <div class="flex flex-col">
        <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">{{ question.text }}</h3>

        <div class="space-y-3">
          <div 
            *ngFor="let option of question.options" 
            class="relative"
            [@optionAppear]
          >
            <input
              type="radio"
              [id]="'option-' + question.id + '-' + option.value"
              [name]="'question-' + question.id"
              [value]="option.value"
              [(ngModel)]="selectedOption"
              (change)="onOptionChange()"
              class="sr-only peer"
            >
            <label
              [for]="'option-' + question.id + '-' + option.value"
              class="block w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-200
                     peer-checked:border-primary-500 peer-checked:bg-primary-50
                     hover:border-primary-300 hover:bg-primary-50/50"
            >
              <div class="flex items-center">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center
                           peer-checked:border-primary-500 peer-checked:bg-primary-500
                           transition-all duration-200">
                  <div class="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                </div>
                <span class="text-gray-700 text-sm sm:text-base">{{ option.text }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('optionAppear', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class TestQuestionComponent {
  @Input() question: any;
  @Output() answerSelected = new EventEmitter<number>();

  selectedOption: number | null = null;

  onOptionChange() {
    if (this.selectedOption !== null) {
      this.answerSelected.emit(this.selectedOption);
    }
  }
}