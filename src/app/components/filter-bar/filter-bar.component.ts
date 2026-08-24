import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';
import { CategoryType, DocumentStatusType, ViewModeType } from '../../models/transparency.model';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      
      <!-- Category Chips Filter -->
      <div class="mb-6">
        <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.447.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"></path></svg>
          <span>Filtrar por Categoría Ley 1712</span>
        </h2>
        
        <div class="flex flex-wrap gap-2.5">
          <button 
            *ngFor="let cat of transparencyService.categories"
            (click)="transparencyService.setCategory(cat.id)"
            [class.bg-sibundoy-800]="transparencyService.selectedCategory() === cat.id"
            [class.text-white]="transparencyService.selectedCategory() === cat.id"
            [class.shadow-lg]="transparencyService.selectedCategory() === cat.id"
            [class.ring-2]="transparencyService.selectedCategory() === cat.id"
            [class.ring-amber-400]="transparencyService.selectedCategory() === cat.id"
            [class.bg-white]="transparencyService.selectedCategory() !== cat.id"
            [class.text-gray-700]="transparencyService.selectedCategory() !== cat.id"
            [class.hover:bg-emerald-50]="transparencyService.selectedCategory() !== cat.id"
            class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border border-gray-200/80 flex items-center space-x-2 cursor-pointer shadow-sm">
            <span>{{ cat.labelKey | translate }}</span>
            <span 
              [class.bg-amber-400]="transparencyService.selectedCategory() === cat.id"
              [class.text-sibundoy-950]="transparencyService.selectedCategory() === cat.id"
              [class.bg-gray-100]="transparencyService.selectedCategory() !== cat.id"
              [class.text-gray-600]="transparencyService.selectedCategory() !== cat.id"
              class="px-2 py-0.5 rounded-full text-[11px] font-extrabold">
              {{ transparencyService.categoryCounts()[cat.id] || 0 }}
            </span>
          </button>
        </div>
      </div>

      <!-- Secondary Filters & View Layout Toggle -->
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
          
          <!-- Year Filter Dropdown -->
          <div class="flex items-center space-x-2">
            <label for="year-select" class="text-xs font-bold text-gray-600 uppercase">{{ 'SEARCH.FILTER_YEAR' | translate }}:</label>
            <select 
              id="year-select"
              [ngModel]="transparencyService.selectedYear()"
              (ngModelChange)="transparencyService.setYear($event)"
              class="bg-gray-50 border border-gray-300 text-gray-800 text-xs sm:text-sm rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-emerald-600 p-2.5 font-semibold">
              <option value="all">{{ 'SEARCH.ALL_YEARS' | translate }}</option>
              <option *ngFor="let year of transparencyService.availableYears" [value]="year">{{ year }}</option>
            </select>
          </div>

          <!-- Status Filter Dropdown -->
          <div class="flex items-center space-x-2">
            <label for="status-select" class="text-xs font-bold text-gray-600 uppercase">{{ 'SEARCH.FILTER_STATUS' | translate }}:</label>
            <select 
              id="status-select"
              [ngModel]="transparencyService.selectedStatus()"
              (ngModelChange)="transparencyService.setStatus($event)"
              class="bg-gray-50 border border-gray-300 text-gray-800 text-xs sm:text-sm rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-emerald-600 p-2.5 font-semibold">
              <option value="all">{{ 'SEARCH.ALL_STATUSES' | translate }}</option>
              <option value="active">{{ 'DOCUMENTS.STATUS_PUBLISHED' | translate }}</option>
              <option value="archived">{{ 'DOCUMENTS.STATUS_ARCHIVED' | translate }}</option>
            </select>
          </div>

        </div>

        <!-- View Mode Buttons (Grid vs List) -->
        <div class="flex items-center space-x-2 self-end md:self-auto">
          <span class="text-xs font-bold text-gray-500 uppercase mr-1">Vista:</span>
          
          <button 
            (click)="transparencyService.setViewMode('grid')"
            [class.bg-sibundoy-800]="transparencyService.viewMode() === 'grid'"
            [class.text-white]="transparencyService.viewMode() === 'grid'"
            [class.bg-gray-100]="transparencyService.viewMode() !== 'grid'"
            [class.text-gray-600]="transparencyService.viewMode() !== 'grid'"
            aria-label="Vista en Cuadrícula"
            title="Vista en Grilla"
            class="p-2 rounded-xl transition shadow-sm hover:opacity-90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>

          <button 
            (click)="transparencyService.setViewMode('list')"
            [class.bg-sibundoy-800]="transparencyService.viewMode() === 'list'"
            [class.text-white]="transparencyService.viewMode() === 'list'"
            [class.bg-gray-100]="transparencyService.viewMode() !== 'list'"
            [class.text-gray-600]="transparencyService.viewMode() !== 'list'"
            aria-label="Vista en Lista"
            title="Vista en Lista"
            class="p-2 rounded-xl transition shadow-sm hover:opacity-90">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

    </section>
  `
})
export class FilterBarComponent {
  readonly transparencyService = inject(TransparencyService);
}
