import { Component, inject, signal, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyService } from '../../services/transparency.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="bg-white border-t border-gray-200 text-gray-700 text-xs mt-12">
      
      <!-- Main Upper Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: Official Contact Data -->
          <div class="lg:col-span-7 space-y-2.5">
            <h3 class="font-extrabold text-base text-[#588117]">
              Alcaldía Municipal de Sibundoy
            </h3>

            <div class="space-y-1 text-[#4c4c4c] font-medium leading-relaxed">
              <p><strong>Dirección:</strong> Calle 18 # 15-41 Barrio Libertad - Sibundoy, Putumayo.</p>
              <p><strong>Horario de atención:</strong> Lunes a viernes de 8:00 - 12:00; 14:00 - 18:00</p>
              <p><strong>Teléfono Conmutador:</strong> 3175282653</p>
              <p><strong>Teléfono móvil:</strong> 3175282653</p>
              <p><strong>Línea anticorrupción:</strong> +57 (608) 4201515 Ext. 1101</p>
              <p>
                <strong>Correo Institucional:</strong> 
                <a href="mailto:contactenos@sibundoy-putumayo.gov.co" class="hover:underline text-[#0943b5]">
                  contactenos&#64;sibundoy-putumayo.gov.co
                </a>
              </p>
              <p>
                <strong>Correo de notificaciones judiciales:</strong> 
                <a href="mailto:notificacionjudicial@sibundoy-putumayo.gov.co" class="hover:underline text-[#0943b5]">
                  notificacionjudicial&#64;sibundoy-putumayo.gov.co
                </a>
              </p>
            </div>
          </div>

          <!-- Right Column: Logos & Live Hora Legal Colombia Widget -->
          <div class="lg:col-span-5 flex flex-col items-end space-y-4">
            
            <!-- Dual Logos (Escudo & Somos Sibundoy Verde) -->
            <div class="flex items-center space-x-3">
              <img 
                src="assets/images/escudo.png" 
                alt="Escudo Sibundoy" 
                class="h-12 w-auto object-contain">
              <div class="h-8 w-px bg-gray-300"></div>
              <img 
                src="assets/images/somos-sibundoy-verde.png" 
                alt="Somos Sibundoy Verde" 
                class="h-10 w-auto object-contain">
            </div>

            <!-- Official Live Hora Legal Widget -->
            <div class="w-full max-w-sm bg-[#004884] text-white p-3 rounded-lg shadow-md flex items-center justify-between border border-blue-900">
              <div class="text-[10px] font-bold tracking-tight text-blue-200 leading-tight">
                <span>Instituto Nacional de</span><br>
                <span>Metrología de Colombia</span>
              </div>
              <div class="text-xl font-extrabold font-mono text-white tracking-widest px-2">
                {{ currentTime() }}
              </div>
              <div class="text-[10px] font-bold text-right text-blue-200 leading-tight">
                <span>HORA LEGAL</span><br>
                <span>REPÚBLICA DE COLOMBIA</span>
              </div>
            </div>

            <p class="text-[11px] text-gray-400 font-medium">
              Última modificación: 11 agosto 2026, 7:09 pm
            </p>
          </div>

        </div>

        <!-- Social Media Row (Green circle icons from official site) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 pt-6 border-t border-gray-200">
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-700 hover:text-[#588117] transition font-semibold">
            <span class="w-7 h-7 rounded-full bg-[#588117] text-white flex items-center justify-center font-bold text-xs">f</span>
            <span>&#64;Facebook</span>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-700 hover:text-[#588117] transition font-semibold">
            <span class="w-7 h-7 rounded-full bg-[#588117] text-white flex items-center justify-center font-bold text-xs">🐦</span>
            <span>&#64;Twitter</span>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-700 hover:text-[#588117] transition font-semibold">
            <span class="w-7 h-7 rounded-full bg-[#588117] text-white flex items-center justify-center font-bold text-xs">▶</span>
            <span>&#64;Youtube</span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-gray-700 hover:text-[#588117] transition font-semibold">
            <span class="w-7 h-7 rounded-full bg-[#588117] text-white flex items-center justify-center font-bold text-xs">📷</span>
            <span>&#64;Instagram</span>
          </a>

        </div>

        <!-- Footer Links Row -->
        <div class="flex flex-wrap items-center justify-between text-xs text-gray-600 pt-4 border-t border-gray-200 gap-2">
          <span>Última modificación: 11 agosto 2026, 7:09 pm</span>
          <div class="flex items-center space-x-4 font-semibold">
            <a href="#" (click)="$event.preventDefault()" class="hover:underline">Políticas</a>
            <a href="#" (click)="$event.preventDefault()" class="hover:underline">Transparencia</a>
            <a href="#" (click)="$event.preventDefault()" class="hover:underline">Mapa del sitio</a>
            <a href="#" (click)="$event.preventDefault()" class="hover:underline">Estadísticas</a>
          </div>
        </div>

      </div>

      <!-- MinTIC Green Sub-bar -->
      <div class="bg-[#588117] text-white text-[11px] py-1.5 px-4">
        <div class="max-w-7xl mx-auto flex justify-end items-center">
          <span class="font-bold">Creado: Ministerio TIC 🇨🇴</span>
        </div>
      </div>

      <!-- Bottom GOV.CO Blue Bar -->
      <div class="bg-[#0943b5] text-white py-3 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="bg-white text-[#0943b5] px-2 py-0.5 rounded font-black text-xs">gov.co</span>
            <span class="text-blue-200">|</span>
            <span class="text-xs font-bold bg-amber-400 text-black px-1.5 py-0.5 rounded">CO</span>
          </div>

          <button 
            (click)="scrollToTop()"
            aria-label="Volver arriba"
            class="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7"></path></svg>
          </button>
        </div>
      </div>

    </footer>
  `
})
export class FooterComponent implements OnInit, OnDestroy {
  readonly transparencyService = inject(TransparencyService);
  readonly currentTime = signal<string>('');
  private timerId: any;

  ngOnInit(): void {
    this.updateClock();
    this.timerId = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateClock(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.currentTime.set(`${hours}:${minutes}:${seconds}`);
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
