import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';

@Component({
  selector: 'app-accessibility-widget',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <!-- 1. Right Floating Accessibility Bar (Exact GOV.CO Sidebar Widget) -->
    <aside 
      class="fixed right-0 top-1/3 z-40 bg-[#0943b5] text-white rounded-l-xl shadow-2xl flex flex-col items-center py-2 px-1 space-y-3 border-l-2 border-t-2 border-b-2 border-white/30"
      aria-label="Herramientas de Accesibilidad (WCAG 2.1 AA)">
      
      <!-- High Contrast Toggle -->
      <button 
        (click)="transparencyService.toggleHighContrast()"
        [class.bg-amber-400]="transparencyService.isHighContrast()"
        [class.text-black]="transparencyService.isHighContrast()"
        [class.text-white]="!transparencyService.isHighContrast()"
        aria-label="Activar o desactivar Alto Contraste"
        title="Alto Contraste (WCAG 2.1 AA)"
        class="w-9 h-9 rounded-lg hover:bg-white/20 transition flex items-center justify-center font-bold text-sm">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM11 4.07V15.93A6.001 6.001 0 0011 4.07z" clip-rule="evenodd"></path>
        </svg>
      </button>

      <!-- Increase Font Size (A+) -->
      <button 
        (click)="transparencyService.setFontSize('lg')"
        [class.bg-amber-400]="transparencyService.fontSize() === 'lg'"
        [class.text-black]="transparencyService.fontSize() === 'lg'"
        aria-label="Aumentar tamaño de texto"
        title="Aumentar Texto"
        class="w-9 h-9 rounded-lg hover:bg-white/20 transition flex items-center justify-center font-extrabold text-xs">
        A+
      </button>

      <!-- Decrease Font Size (A-) -->
      <button 
        (click)="transparencyService.setFontSize('sm')"
        [class.bg-amber-400]="transparencyService.fontSize() === 'sm'"
        [class.text-black]="transparencyService.fontSize() === 'sm'"
        aria-label="Disminuir tamaño de texto"
        title="Disminuir Texto"
        class="w-9 h-9 rounded-lg hover:bg-white/20 transition flex items-center justify-center font-extrabold text-xs">
        A-
      </button>

      <!-- Sign Language / Lenguaje de Señas -->
      <button 
        (click)="signLanguageOpen.set(true)"
        aria-label="Lenguaje de Señas y Accesibilidad"
        title="Lenguaje de Señas"
        class="w-9 h-9 rounded-lg hover:bg-white/20 transition flex items-center justify-center font-extrabold text-sm">
        🤟
      </button>

    </aside>

    <!-- 2. Bottom Right Floating CTA Button ("SOLICITA INFORMACIÓN") -->
    <div class="fixed bottom-6 right-6 z-40">
      <button 
        (click)="infoModalOpen.set(true)"
        class="bg-[#1e3a8a] hover:bg-[#0943b5] text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-full shadow-2xl border-2 border-white/40 flex items-center space-x-2 transition transform hover:scale-105">
        <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
        <span class="tracking-wide uppercase">SOLICITA INFORMACIÓN</span>
      </button>
    </div>

    <!-- Info Request Modal -->
    <div 
      *ngIf="infoModalOpen()"
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 text-gray-800 space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <h3 class="font-extrabold text-lg text-[#0943b5] flex items-center gap-2">
            <span>💬 Solicitud de Información Pública</span>
          </h3>
          <button (click)="infoModalOpen.set(false)" class="text-gray-400 hover:text-red-500 text-lg font-bold">✕</button>
        </div>
        
        <p class="text-xs text-gray-600 leading-relaxed">
          En virtud de la Ley 1712 de 2014, cualquier ciudadano tiene derecho a solicitar información pública ante la Alcaldía Municipal de Sibundoy (Putumayo).
        </p>

        <div class="space-y-2 text-xs font-medium">
          <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <span class="font-bold text-[#0943b5] block">📧 Correo Oficial de PQRDS:</span>
            <a href="mailto:contactenos@sibundoy-putumayo.gov.co" class="text-blue-700 underline font-semibold">
              contactenos&#64;sibundoy-putumayo.gov.co
            </a>
          </div>

          <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-800 block">📍 Atención Presencial:</span>
            <span>Calle 16 No. 15-28, Barrio Centro, Sibundoy, Putumayo.</span>
          </div>
        </div>

        <button 
          (click)="infoModalOpen.set(false)"
          class="w-full py-2.5 bg-[#0943b5] text-white rounded-xl font-bold text-xs hover:bg-blue-800 transition">
          Entendido / Cerrar
        </button>
      </div>
    </div>

    <!-- Sign Language Info Modal -->
    <div 
      *ngIf="signLanguageOpen()"
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 text-gray-800 space-y-4 text-center">
        <span class="text-4xl">🤟</span>
        <h3 class="font-extrabold text-lg text-[#0943b5]">Accesibilidad en Lengua de Señas Colombiana</h3>
        <p class="text-xs text-gray-600 leading-relaxed">
          El portal de Transparencia de Sibundoy cuenta con soporte accesible para personas con discapacidad auditiva y visual de acuerdo con el estándar WCAG 2.1 AA.
        </p>
        <button 
          (click)="signLanguageOpen.set(false)"
          class="w-full py-2.5 bg-[#0943b5] text-white rounded-xl font-bold text-xs hover:bg-blue-800 transition">
          Cerrar
        </button>
      </div>
    </div>
  `
})
export class AccessibilityWidgetComponent {
  readonly transparencyService = inject(TransparencyService);
  readonly infoModalOpen = signal(false);
  readonly signLanguageOpen = signal(false);
}
