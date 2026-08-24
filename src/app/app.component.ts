import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentModalComponent } from './components/document-modal/document-modal.component';
import { AccessibilityWidgetComponent } from './components/accessibility-widget/accessibility-widget.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeaderBannerComponent,
    DocumentListComponent,
    DocumentModalComponent,
    AccessibilityWidgetComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-100 flex flex-col font-sans antialiased text-gray-900 selection:bg-amber-400 selection:text-black relative">
      
      <!-- GOV.CO Top Bar & Institutional Navigation -->
      <app-navbar></app-navbar>

      <!-- Breadcrumbs & Transparencia Heading -->
      <app-header-banner></app-header-banner>

      <!-- Official Accordions (1 to 10 with sub-items 1.1 to 10.1) -->
      <div class="flex-1">
        <app-document-list></app-document-list>
      </div>

      <!-- Right Floating Accessibility Sidebar & SOLICITA INFORMACIÓN button -->
      <app-accessibility-widget></app-accessibility-widget>

      <!-- Document Detail Modal -->
      <app-document-modal></app-document-modal>

      <!-- Municipal Footer -->
      <app-footer></app-footer>

    </div>
  `
})
export class AppComponent {
  title = 'Alcaldía Municipal de Sibundoy - Portal de Transparencia';
}
