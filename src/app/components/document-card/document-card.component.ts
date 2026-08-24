import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TransparencyDocument } from '../../models/transparency.model';
import { TransparencyService } from '../../services/transparency.service';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <!-- Grid Mode Layout -->
    <article 
      *ngIf="mode === 'grid'"
      class="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      <!-- Featured Header Accent Bar -->
      <div 
        [class.bg-gradient-to-r]="true"
        [class.from-amber-500]="doc.featured"
        [class.to-emerald-600]="doc.featured"
        [class.from-emerald-700]="!doc.featured"
        [class.to-sibundoy-800]="!doc.featured"
        class="h-2 w-full"></div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        
        <div>
          <!-- Top Badges & Meta -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span 
              [class.bg-red-100]="doc.fileFormat === 'PDF'"
              [class.text-red-700]="doc.fileFormat === 'PDF'"
              [class.bg-emerald-100]="doc.fileFormat === 'XLSX'"
              [class.text-emerald-800]="doc.fileFormat === 'XLSX'"
              [class.bg-blue-100]="doc.fileFormat === 'ZIP'"
              [class.text-blue-800]="doc.fileFormat === 'ZIP'"
              class="px-2.5 py-1 rounded-md text-[11px] font-black tracking-wider uppercase flex items-center gap-1 border border-black/5">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg>
              <span>{{ doc.fileFormat }}</span>
            </span>

            <span class="text-xs font-semibold text-gray-500 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>{{ doc.datePublished }}</span>
            </span>
          </div>

          <!-- Document Radication Code -->
          <p class="text-[11px] font-mono text-emerald-800 font-bold uppercase mb-1 tracking-wider">
            RAD: {{ doc.radicationCode }}
          </p>

          <!-- Document Title -->
          <h3 class="text-base font-bold text-gray-900 group-hover:text-sibundoy-700 transition line-clamp-2 leading-snug mb-2">
            {{ doc.title }}
          </h3>

          <!-- Description -->
          <p class="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {{ doc.description }}
          </p>
        </div>

        <!-- Responsible Department & File Size -->
        <div class="pt-4 border-t border-gray-100 mt-auto">
          <p class="text-[11px] font-medium text-gray-500 truncate mb-3" [title]="doc.department">
            🏛️ {{ doc.department }}
          </p>

          <!-- Action Buttons -->
          <div class="grid grid-cols-2 gap-2">
            <button 
              (click)="transparencyService.openDocumentModal(doc)"
              class="w-full py-2 px-3 rounded-xl bg-gray-100 hover:bg-sibundoy-100 text-sibundoy-900 font-bold text-xs transition flex items-center justify-center gap-1">
              <svg class="w-4 h-4 text-sibundoy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <span>{{ 'DOCUMENTS.VIEW' | translate }}</span>
            </button>

            <a 
              [href]="doc.downloadUrl"
              (click)="$event.preventDefault(); transparencyService.openDocumentModal(doc)"
              class="w-full py-2 px-3 rounded-xl bg-sibundoy-800 hover:bg-sibundoy-700 text-white font-bold text-xs transition flex items-center justify-center gap-1 shadow-sm">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>{{ 'DOCUMENTS.DOWNLOAD' | translate }}</span>
            </a>
          </div>
        </div>

      </div>
    </article>

    <!-- List Mode Layout -->
    <article 
      *ngIf="mode === 'list'"
      class="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      
      <div class="flex items-start space-x-4 flex-1">
        <div 
          [class.bg-red-100]="doc.fileFormat === 'PDF'"
          [class.text-red-700]="doc.fileFormat === 'PDF'"
          [class.bg-emerald-100]="doc.fileFormat === 'XLSX'"
          [class.text-emerald-800]="doc.fileFormat === 'XLSX'"
          [class.bg-blue-100]="doc.fileFormat === 'ZIP'"
          [class.text-blue-800]="doc.fileFormat === 'ZIP'"
          class="w-12 h-12 rounded-xl font-extrabold text-xs flex flex-col items-center justify-center shrink-0 border border-black/5">
          <span>{{ doc.fileFormat }}</span>
          <span class="text-[9px] font-normal opacity-80">{{ doc.fileSize }}</span>
        </div>

        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[11px] font-mono font-bold text-emerald-800">RAD: {{ doc.radicationCode }}</span>
            <span class="text-gray-300">•</span>
            <span class="text-xs text-gray-500 font-medium">{{ doc.datePublished }}</span>
            <span class="text-gray-300">•</span>
            <span class="text-xs text-gray-600 font-medium">🏛️ {{ doc.department }}</span>
          </div>

          <h3 class="text-base font-bold text-gray-900 hover:text-sibundoy-700 transition">
            {{ doc.title }}
          </h3>

          <p class="text-xs text-gray-600 line-clamp-1">
            {{ doc.description }}
          </p>
        </div>
      </div>

      <div class="flex items-center space-x-2 shrink-0 self-end md:self-center">
        <button 
          (click)="transparencyService.openDocumentModal(doc)"
          class="px-3 py-2 rounded-xl bg-gray-100 hover:bg-sibundoy-100 text-sibundoy-900 font-bold text-xs transition flex items-center gap-1">
          <svg class="w-4 h-4 text-sibundoy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          <span>{{ 'DOCUMENTS.VIEW' | translate }}</span>
        </button>

        <button 
          (click)="transparencyService.openDocumentModal(doc)"
          class="px-4 py-2 rounded-xl bg-sibundoy-800 hover:bg-sibundoy-700 text-white font-bold text-xs transition flex items-center gap-1 shadow-sm">
          <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          <span>{{ 'DOCUMENTS.DOWNLOAD' | translate }}</span>
        </button>
      </div>

    </article>
  `
})
export class DocumentCardComponent {
  @Input({ required: true }) doc!: TransparencyDocument;
  @Input() mode: 'grid' | 'list' = 'grid';

  readonly transparencyService = inject(TransparencyService);
}
