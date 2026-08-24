import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';
import { LanguageType } from '../../models/transparency.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <!-- 1. Top GOV.CO Blue Header Bar -->
    <div class="bg-[#0943b5] text-white text-xs py-1.5 px-4 shadow-sm border-b border-blue-900">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a href="https://www.gov.co" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 hover:opacity-90 transition">
          <span class="bg-white text-[#0943b5] px-1.5 py-0.5 rounded font-black tracking-wider text-[10px]">GOV.CO</span>
          <span class="text-blue-100 font-medium">Portal Oficial del Estado Colombiano | Alcaldía Municipal de Sibundoy</span>
        </a>

        <!-- i18n Language Switcher in Header -->
        <div class="flex items-center space-x-1">
          <button 
            *ngFor="let lang of languages" 
            (click)="transparencyService.setLanguage(lang.code)"
            [class.bg-white]="transparencyService.currentLang() === lang.code"
            [class.text-[#0943b5]]="transparencyService.currentLang() === lang.code"
            [class.text-white]="transparencyService.currentLang() !== lang.code"
            [class.hover:bg-blue-800]="transparencyService.currentLang() !== lang.code"
            class="px-2 py-0.5 rounded text-[11px] font-bold transition flex items-center space-x-1">
            <span>{{ lang.flag }}</span>
            <span>{{ lang.code | uppercase }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 2. Main Brand Header with Escudo & Somos Sibundoy Verde Logo -->
    <header class="bg-white text-gray-800 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <!-- Left: Logos & Title -->
        <div class="flex items-center space-x-3 sm:space-x-4 cursor-pointer" (click)="transparencyService.resetFilters()">
          <!-- Escudo de Sibundoy -->
          <img 
            src="assets/images/escudo.png" 
            alt="Escudo Alcaldía Municipal de Sibundoy" 
            class="h-14 sm:h-16 w-auto object-contain drop-shadow-sm">
          
          <div class="h-10 w-px bg-gray-300"></div>

          <!-- Logo Somos Sibundoy Verde -->
          <img 
            src="assets/images/somos-sibundoy-verde.png" 
            alt="Somos Sibundoy Verde" 
            class="h-12 sm:h-14 w-auto object-contain">

          <div>
            <h1 class="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Alcaldía Municipal de Sibundoy
            </h1>
            <p class="text-xs text-[#588117] font-semibold tracking-wide flex items-center gap-1">
              <span>Valle de Sibundoy</span>
              <span>•</span>
              <span>Putumayo, Colombia</span>
            </p>
          </div>
        </div>

        <!-- Right: Login & Entity Search Bar -->
        <div class="flex items-center space-x-4 w-full md:w-auto justify-end">
          <button class="text-xs font-bold text-gray-700 hover:text-[#0943b5] flex items-center space-x-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span>{{ 'HEADER.LOGIN' | translate }}</span>
          </button>

          <!-- Search Pill -->
          <div class="relative flex items-center max-w-xs w-full">
            <input 
              type="text"
              [ngModel]="transparencyService.searchTerm()"
              (ngModelChange)="transparencyService.setSearchTerm($event)"
              [placeholder]="'HEADER.SEARCH_PLACEHOLDER' | translate"
              class="w-full pl-3 pr-10 py-1.5 text-xs rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#588117] bg-gray-50">
            <button class="absolute right-0 top-0 bottom-0 px-3 bg-[#688e26] hover:bg-[#567c17] text-white rounded-r-full flex items-center justify-center transition">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </header>

    <!-- 3. Navigation Bar (Exact Tabs from Official Site) -->
    <nav class="bg-[#f4f6f0] border-b border-gray-200 text-gray-800 text-xs sm:text-sm font-bold sticky top-0 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto no-scrollbar">
        
        <div class="flex items-center space-x-1 py-1">
          <!-- Inicio -->
          <a href="#" (click)="$event.preventDefault(); transparencyService.resetFilters()" class="px-4 py-3 text-gray-700 hover:text-[#588117] transition flex items-center">
            {{ 'NAV.HOME' | translate }}
          </a>

          <!-- Transparencia (ACTIVE GREEN TAB) -->
          <a href="#" (click)="$event.preventDefault()" class="px-5 py-3 bg-[#588117] text-white rounded-t-lg shadow-sm font-extrabold flex items-center space-x-1">
            <span>{{ 'NAV.TRANSPARENCY' | translate }}</span>
          </a>

          <!-- Atención y Servicios -->
          <a href="#" (click)="$event.preventDefault()" class="px-4 py-3 text-gray-700 hover:text-[#588117] transition flex items-center space-x-1">
            <span>{{ 'NAV.ATTENTION' | translate }}</span>
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>

          <!-- Participa -->
          <a href="#" (click)="$event.preventDefault()" class="px-4 py-3 text-gray-700 hover:text-[#588117] transition flex items-center space-x-1">
            <span>{{ 'NAV.PARTICIPATE' | translate }}</span>
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>

          <!-- Noticias -->
          <a href="#" (click)="$event.preventDefault()" class="px-4 py-3 text-gray-700 hover:text-[#588117] transition">
            {{ 'NAV.NEWS' | translate }}
          </a>

          <!-- Normatividad -->
          <a href="#" (click)="$event.preventDefault()" class="px-4 py-3 text-gray-700 hover:text-[#588117] transition">
            {{ 'NAV.REGULATIONS' | translate }}
          </a>
        </div>

      </div>
    </nav>
  `
})
export class NavbarComponent {
  readonly transparencyService = inject(TransparencyService);

  readonly languages: { code: LanguageType; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇨🇴' },
    { code: 'kams', label: 'Camëntsá', flag: '🌿' },
    { code: 'en', label: 'English', flag: '🌐' },
  ];
}
