import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-4" aria-label="Miga de pan">
        <a href="#" (click)="$event.preventDefault(); transparencyService.resetFilters()" class="text-[#588117] hover:underline">
          {{ 'BREADCRUMB.HOME' | translate }}
        </a>
        <span>›</span>
        <span class="text-gray-700 font-bold">{{ 'BREADCRUMB.TRANSPARENCY' | translate }}</span>
      </nav>

      <!-- Main Page Heading -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-[#588117] tracking-tight">
            {{ 'TRANSPARENCY_TITLE' | translate }}
          </h1>
          <p class="text-xs text-gray-600 font-medium mt-1">
            Ley 1712 de 2014 — Transparencia y del Derecho de Acceso a la Información Pública Nacional
          </p>
        </div>

        <!-- Filter & Search Reactive Bar -->
        <div class="flex items-center space-x-2">
          <div class="relative min-w-[280px]">
            <input 
              type="text"
              [ngModel]="transparencyService.searchTerm()"
              (ngModelChange)="transparencyService.setSearchTerm($event)"
              [placeholder]="'SEARCH.PLACEHOLDER' | translate"
              class="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588117] bg-white shadow-sm font-medium">
            
            <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>

            <button 
              *ngIf="transparencyService.searchTerm()"
              (click)="transparencyService.setSearchTerm('')"
              class="absolute right-2.5 top-2 text-gray-400 hover:text-red-500">
              ✕
            </button>
          </div>
        </div>
      </div>

    </div>
  `
})
export class HeaderBannerComponent {
  readonly transparencyService = inject(TransparencyService);
}
