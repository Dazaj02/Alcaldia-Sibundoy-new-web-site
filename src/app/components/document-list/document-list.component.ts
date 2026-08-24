import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';
import { TransparencyDocument } from '../../models/transparency.model';

interface AccordionSubItem {
  id: string;
  code: string;
  titleKey: string;
  docId?: string;
  url?: string;
}

interface AccordionSection {
  number: number;
  titleKey: string;
  category: string;
  subItems: AccordionSubItem[];
}

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <!-- Accordion List Container -->
      <div class="space-y-4">
        
        <div 
          *ngFor="let section of filteredSections()" 
          class="bg-white rounded-xl border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-400">
          
          <!-- Accordion Header Button -->
          <button 
            (click)="toggleAccordion(section.number)"
            [attr.aria-expanded]="isExpanded(section.number)"
            class="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#0943b5] hover:bg-gray-50/80 transition">
            
            <div class="flex items-center space-x-3 sm:space-x-4">
              <!-- Round Blue Number Badge (Official GOV.CO style) -->
              <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0943b5] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                {{ section.number }}
              </span>

              <h2 class="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                {{ section.titleKey | translate }}
              </h2>
            </div>

            <!-- Down Arrow Chevron -->
            <div class="flex items-center space-x-2 shrink-0">
              <span class="text-xs text-gray-400 font-semibold hidden sm:inline">
                ({{ section.subItems.length }} ítems)
              </span>
              <svg 
                [class.rotate-180]="isExpanded(section.number)"
                class="w-5 h-5 text-gray-500 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

          </button>

          <!-- Accordion Body (Sub-items) -->
          <div 
            *ngIf="isExpanded(section.number)"
            class="border-t border-gray-100 bg-gray-50/50 p-3 sm:p-4 space-y-2 animate-fadeIn">
            
            <div 
              *ngFor="let sub of section.subItems"
              (click)="openSubItemModal(sub, section.category)"
              class="group bg-white p-3.5 rounded-lg border border-gray-200 hover:border-[#588117] hover:shadow-md transition cursor-pointer flex items-center justify-between gap-3">
              
              <div class="flex items-start space-x-3">
                <span class="text-emerald-700 font-mono text-xs font-bold pt-0.5 shrink-0">📄</span>
                <span class="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#588117] transition">
                  {{ sub.titleKey | translate }}
                </span>
              </div>

              <div class="flex items-center space-x-2 shrink-0">
                <span class="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline">
                  Ver documento
                </span>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-[#588117] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Zero Results Message -->
      <div *ngIf="filteredSections().length === 0" class="text-center py-12 bg-white rounded-2xl border border-gray-200">
        <p class="text-sm font-bold text-gray-700 mb-2">No se encontraron secciones para la búsqueda</p>
        <button (click)="transparencyService.resetFilters()" class="text-xs text-[#588117] font-extrabold underline">
          Restablecer búsqueda
        </button>
      </div>

    </main>
  `
})
export class DocumentListComponent {
  readonly transparencyService = inject(TransparencyService);
  
  // Track expanded accordion sections
  readonly expandedSet = signal<Set<number>>(new Set([1]));

  // The 10 Official Sections from Alcaldía de Sibundoy
  readonly sections: AccordionSection[] = [
    {
      number: 1,
      titleKey: 'SECTIONS.S1.TITLE',
      category: 'info_instruments',
      subItems: [
        { id: '1.1', code: '1.1', titleKey: 'SECTIONS.S1.SUB_1_1' },
        { id: '1.2', code: '1.2', titleKey: 'SECTIONS.S1.SUB_1_2' },
        { id: '1.3', code: '1.3', titleKey: 'SECTIONS.S1.SUB_1_3' },
        { id: '1.4', code: '1.4', titleKey: 'SECTIONS.S1.SUB_1_4' },
        { id: '1.5', code: '1.5', titleKey: 'SECTIONS.S1.SUB_1_5' },
        { id: '1.6', code: '1.6', titleKey: 'SECTIONS.S1.SUB_1_6' },
        { id: '1.7', code: '1.7', titleKey: 'SECTIONS.S1.SUB_1_7' },
        { id: '1.8', code: '1.8', titleKey: 'SECTIONS.S1.SUB_1_8' },
        { id: '1.9', code: '1.9', titleKey: 'SECTIONS.S1.SUB_1_9' },
        { id: '1.10', code: '1.10', titleKey: 'SECTIONS.S1.SUB_1_10' }
      ]
    },
    {
      number: 2,
      titleKey: 'SECTIONS.S2.TITLE',
      category: 'procedures',
      subItems: [
        { id: '2.1', code: '2.1', titleKey: 'SECTIONS.S2.SUB_2_1' }
      ]
    },
    {
      number: 3,
      titleKey: 'SECTIONS.S3.TITLE',
      category: 'contracting',
      subItems: [
        { id: '3.1', code: '3.1', titleKey: 'SECTIONS.S3.SUB_3_1' },
        { id: '3.2', code: '3.2', titleKey: 'SECTIONS.S3.SUB_3_2' },
        { id: '3.3', code: '3.3', titleKey: 'SECTIONS.S3.SUB_3_3' },
        { id: '3.4', code: '3.4', titleKey: 'SECTIONS.S3.SUB_3_4' }
      ]
    },
    {
      number: 4,
      titleKey: 'SECTIONS.S4.TITLE',
      category: 'control',
      subItems: [
        { id: '4.1', code: '4.1', titleKey: 'SECTIONS.S4.SUB_4_1' },
        { id: '4.2', code: '4.2', titleKey: 'SECTIONS.S4.SUB_4_2' },
        { id: '4.3', code: '4.3', titleKey: 'SECTIONS.S4.SUB_4_3' },
        { id: '4.4', code: '4.4', titleKey: 'SECTIONS.S4.SUB_4_4' },
        { id: '4.5', code: '4.5', titleKey: 'SECTIONS.S4.SUB_4_5' },
        { id: '4.6', code: '4.6', titleKey: 'SECTIONS.S4.SUB_4_6' },
        { id: '4.7', code: '4.7', titleKey: 'SECTIONS.S4.SUB_4_7' }
      ]
    },
    {
      number: 5,
      titleKey: 'SECTIONS.S5.TITLE',
      category: 'planning',
      subItems: [
        { id: '5.1', code: '5.1', titleKey: 'SECTIONS.S5.SUB_5_1' },
        { id: '5.2', code: '5.2', titleKey: 'SECTIONS.S5.SUB_5_2' },
        { id: '5.3', code: '5.3', titleKey: 'SECTIONS.S5.SUB_5_3' },
        { id: '5.4', code: '5.4', titleKey: 'SECTIONS.S5.SUB_5_4' },
        { id: '5.5', code: '5.5', titleKey: 'SECTIONS.S5.SUB_5_5' },
        { id: '5.6', code: '5.6', titleKey: 'SECTIONS.S5.SUB_5_6' }
      ]
    },
    {
      number: 6,
      titleKey: 'SECTIONS.S6.TITLE',
      category: 'budget',
      subItems: [
        { id: '6.1', code: '6.1', titleKey: 'SECTIONS.S6.SUB_6_1' },
        { id: '6.2', code: '6.2', titleKey: 'SECTIONS.S6.SUB_6_2' },
        { id: '6.3', code: '6.3', titleKey: 'SECTIONS.S6.SUB_6_3' }
      ]
    },
    {
      number: 7,
      titleKey: 'SECTIONS.S7.TITLE',
      category: 'regulations',
      subItems: [
        { id: '7.1', code: '7.1', titleKey: 'SECTIONS.S7.SUB_7_1' }
      ]
    },
    {
      number: 8,
      titleKey: 'SECTIONS.S8.TITLE',
      category: 'entity_info',
      subItems: [
        { id: '8.1', code: '8.1', titleKey: 'SECTIONS.S8.SUB_8_1' },
        { id: '8.2', code: '8.2', titleKey: 'SECTIONS.S8.SUB_8_2' },
        { id: '8.3', code: '8.3', titleKey: 'SECTIONS.S8.SUB_8_3' },
        { id: '8.4', code: '8.4', titleKey: 'SECTIONS.S8.SUB_8_4' },
        { id: '8.5', code: '8.5', titleKey: 'SECTIONS.S8.SUB_8_5' }
      ]
    },
    {
      number: 9,
      titleKey: 'SECTIONS.S9.TITLE',
      category: 'participation',
      subItems: [
        { id: '9.1', code: '9.1', titleKey: 'SECTIONS.S9.SUB_9_1' },
        { id: '9.2', code: '9.2', titleKey: 'SECTIONS.S9.SUB_9_2' }
      ]
    },
    {
      number: 10,
      titleKey: 'SECTIONS.S10.TITLE',
      category: 'open_data',
      subItems: [
        { id: '10.1', code: '10.1', titleKey: 'SECTIONS.S10.SUB_10_1' }
      ]
    }
  ];

  // Filter sections reactively based on search term
  readonly filteredSections = computed(() => {
    const term = this.transparencyService.searchTerm().toLowerCase().trim();
    if (!term) return this.sections;

    return this.sections.map(section => {
      const matchingSubItems = section.subItems.filter(sub => 
        sub.code.includes(term) || sub.titleKey.toLowerCase().includes(term)
      );
      return {
        ...section,
        subItems: matchingSubItems
      };
    }).filter(sec => sec.subItems.length > 0);
  });

  isExpanded(num: number): boolean {
    // If search term active, automatically expand matching sections
    if (this.transparencyService.searchTerm().trim().length > 0) return true;
    return this.expandedSet().has(num);
  }

  toggleAccordion(num: number): void {
    this.expandedSet.update(set => {
      const newSet = new Set(set);
      if (newSet.has(num)) {
        newSet.delete(num);
      } else {
        newSet.add(num);
      }
      return newSet;
    });
  }

  openSubItemModal(sub: AccordionSubItem, category: any): void {
    const mockDoc: TransparencyDocument = {
      id: `DOC-${sub.code}`,
      title: `${sub.code} Documento Oficial Ley 1712`,
      description: `Documento oficial correspondiente a la sección ${sub.code} del Portal de Transparencia de la Alcaldía Municipal de Sibundoy (Putumayo). Cumplimiento de la Ley 1712 de 2014 y Decreto 1081 de 2015.`,
      category: category,
      year: 2026,
      datePublished: '2026-01-15',
      fileFormat: 'PDF',
      fileSize: '2.4 MB',
      status: 'active',
      radicationCode: `SIB-LEY1712-${sub.code}`,
      department: 'Alcaldía Municipal de Sibundoy',
      downloadUrl: '#'
    };
    this.transparencyService.openDocumentModal(mockDoc);
  }
}
