import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';

@Component({
  selector: 'app-document-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div 
      *ngIf="transparencyService.selectedDocument() as doc"
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      
      <!-- Modal Window Container -->
      <div 
        class="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-gray-200 transform transition-all relative flex flex-col max-h-[90vh]">
        
        <!-- Modal Top Banner Header -->
        <div class="bg-gradient-to-r from-sibundoy-900 via-sibundoy-800 to-emerald-950 text-white p-6 relative">
          
          <button 
            (click)="transparencyService.closeDocumentModal()"
            aria-label="Cerrar modal"
            class="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div class="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>{{ doc.radicationCode }}</span>
            <span>•</span>
            <span class="text-emerald-300">Vigencia {{ doc.year }}</span>
          </div>

          <h2 class="text-xl sm:text-2xl font-extrabold text-white leading-snug pr-8">
            {{ doc.title }}
          </h2>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="p-6 overflow-y-auto space-y-6 flex-1 text-gray-800 text-sm">
          
          <!-- Key Metadata Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
            <div>
              <span class="text-[11px] font-bold uppercase text-gray-500 block">{{ 'DOCUMENTS.FILE_TYPE' | translate }}</span>
              <span class="font-bold text-sibundoy-900 text-base flex items-center gap-1">
                📄 {{ doc.fileFormat }}
              </span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-gray-500 block">{{ 'DOCUMENTS.SIZE' | translate }}</span>
              <span class="font-bold text-sibundoy-900 text-base">💾 {{ doc.fileSize }}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-gray-500 block">{{ 'DOCUMENTS.PUBLISHED' | translate }}</span>
              <span class="font-bold text-sibundoy-900 text-base">📅 {{ doc.datePublished }}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-gray-500 block">Estado</span>
              <span class="font-bold text-emerald-700 text-base flex items-center gap-1">
                ✅ {{ 'DOCUMENTS.STATUS_PUBLISHED' | translate }}
              </span>
            </div>
          </div>

          <!-- Responsible Department -->
          <div>
            <h3 class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-1">
              {{ 'MODAL.RESPONSIBLE' | translate }}
            </h3>
            <p class="font-semibold text-gray-900 text-base flex items-center gap-2">
              <span class="text-xl">🏛️</span>
              <span>{{ doc.department }}</span>
            </p>
          </div>

          <!-- Description / Summary -->
          <div>
            <h3 class="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">
              {{ 'MODAL.SUMMARY' | translate }}
            </h3>
            <p class="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
              {{ doc.description }}
            </p>
          </div>

          <!-- Interactive Document Viewer Mockup -->
          <div class="border border-gray-200 rounded-2xl p-4 bg-gray-100">
            <div class="flex items-center justify-between mb-3 text-xs font-bold text-gray-600">
              <span>Vista previa rápida (Página 1 de 4)</span>
              <span class="text-emerald-700">Verificado por Firma Digital Alcaldía de Sibundoy</span>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-gray-300 shadow-inner text-gray-600 font-mono text-xs space-y-3">
              <div class="border-b border-gray-200 pb-3 flex justify-between items-center">
                <span class="font-extrabold text-sibundoy-900">REPÚBLICA DE COLOMBIA - DEPARTAMENTO DEL PUTUMAYO</span>
                <span class="text-[10px] text-gray-400">CODIGO LEY 1712</span>
              </div>
              <p class="font-bold text-gray-900 text-center uppercase tracking-wide">
                ALCALDÍA MUNICIPAL DE SIBUNDOY
              </p>
              <p class="text-center font-semibold text-emerald-800">
                OFFICIAL PUBLIC DOCUMENT RELEASE — {{ doc.radicationCode }}
              </p>
              <div class="space-y-1 py-2 text-gray-500">
                <p>• Este documento cumple con la Ley de Transparencia 1712 de 2014 y Decreto 1081 de 2015.</p>
                <p>• Custodiado en los archivos públicos del Municipio de Sibundoy, Putumayo.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Modal Footer Actions -->
        <div class="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-4">
          <button 
            (click)="transparencyService.closeDocumentModal()"
            class="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold text-xs hover:bg-gray-100 transition">
            {{ 'MODAL.CLOSE' | translate }}
          </button>

          <button 
            (click)="downloadSimulatedFile(doc)"
            class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sibundoy-800 to-emerald-700 hover:from-sibundoy-700 hover:to-emerald-600 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2">
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span>{{ 'MODAL.DOWNLOAD_NOW' | translate }} ({{ doc.fileSize }})</span>
          </button>
        </div>

      </div>

    </div>
  `
})
export class DocumentModalComponent {
  readonly transparencyService = inject(TransparencyService);

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.transparencyService.closeDocumentModal();
  }

  downloadSimulatedFile(doc: any) {
    const textContent = `ALCALDÍA MUNICIPAL DE SIBUNDOY - PUTUMAYO\n` +
      `Portal de Transparencia y Acceso a la Información Pública (Ley 1712 de 2014)\n\n` +
      `CÓDIGO DE RADICACIÓN: ${doc.radicationCode}\n` +
      `TÍTULO: ${doc.title}\n` +
      `DEPENDENCIA: ${doc.department}\n` +
      `FECHA PUBLICACIÓN: ${doc.datePublished}\n` +
      `VIGENCIA: ${doc.year}\n\n` +
      `RESUMEN:\n${doc.description}\n\n` +
      `Alcaldía Municipal de Sibundoy, Putumayo, Colombia.\n` +
      `Generado desde el Portal Web Oficial.`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.radicationCode}_Sibundoy.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
