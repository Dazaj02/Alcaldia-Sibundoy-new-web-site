import { Injectable, signal, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { 
  TransparencyDocument, 
  CategoryType, 
  DocumentStatusType, 
  ViewModeType, 
  LanguageType,
  CategoryInfo
} from '../models/transparency.model';

@Injectable({
  providedIn: 'root'
})
export class TransparencyService {
  private translate = inject(TranslateService);

  // Core State Signals
  readonly searchTerm = signal<string>('');
  readonly selectedCategory = signal<CategoryType>('all');
  readonly selectedYear = signal<string>('all');
  readonly selectedStatus = signal<DocumentStatusType>('all');
  readonly viewMode = signal<ViewModeType>('grid');
  readonly currentLang = signal<LanguageType>('es');
  readonly isHighContrast = signal<boolean>(false);
  readonly fontSize = signal<'sm' | 'md' | 'lg'>('md');
  readonly selectedDocument = signal<TransparencyDocument | null>(null);

  // Official 10 Categories of Ley 1712 de 2014 (Sibundoy)
  readonly categories: CategoryInfo[] = [
    { id: 'all', number: '0', labelKey: 'SEARCH.ALL_CATEGORIES', icon: 'layers', color: 'bg-emerald-600' },
    { id: 'info_instruments', number: '1', labelKey: 'CATEGORIES_NAME.info_instruments', icon: 'database', color: 'bg-blue-600' },
    { id: 'procedures', number: '2', labelKey: 'CATEGORIES_NAME.procedures', icon: 'check-circle', color: 'bg-rose-600' },
    { id: 'contracting', number: '3', labelKey: 'CATEGORIES_NAME.contracting', icon: 'file-text', color: 'bg-amber-600' },
    { id: 'control', number: '4', labelKey: 'CATEGORIES_NAME.control', icon: 'shield-check', color: 'bg-indigo-600' },
    { id: 'planning', number: '5', labelKey: 'CATEGORIES_NAME.planning', icon: 'map', color: 'bg-cyan-600' },
    { id: 'budget', number: '6', labelKey: 'CATEGORIES_NAME.budget', icon: 'pie-chart', color: 'bg-emerald-700' },
    { id: 'regulations', number: '7', labelKey: 'CATEGORIES_NAME.regulations', icon: 'book-open', color: 'bg-teal-600' },
    { id: 'entity_info', number: '8', labelKey: 'CATEGORIES_NAME.entity_info', icon: 'building', color: 'bg-purple-600' },
    { id: 'participation', number: '9', labelKey: 'CATEGORIES_NAME.participation', icon: 'users', color: 'bg-orange-600' },
    { id: 'open_data', number: '10', labelKey: 'CATEGORIES_NAME.open_data', icon: 'share-2', color: 'bg-sky-600' },
  ];

  // Available Years
  readonly availableYears = ['2026', '2025', '2024', '2023', '2022'];

  // Documents array based on Ley 1712 for Alcaldía Municipal de Sibundoy
  private readonly rawDocuments = signal<TransparencyDocument[]>([
    {
      id: 'DOC-2026-001',
      title: '1.5 Tablas de Retención Documental (TRD) - Alcaldía Municipal de Sibundoy',
      description: 'Instrumento archivístico oficial que especifica el listado de series con sus correspondientes tipos documentales y tiempos de retención para la conservación del patrimonio histórico.',
      category: 'info_instruments',
      year: 2026,
      datePublished: '2026-01-12',
      fileFormat: 'PDF',
      fileSize: '3.4 MB',
      status: 'active',
      radicationCode: 'SIB-TRD-2026',
      department: 'Secretaría General y Archivo Central',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 'DOC-2026-002',
      title: '2.1 Guía Unificada de Trámites y Servicios al Ciudadano - Vigencia 2026',
      description: 'Catálogo de trámites municipales: Liquidación de Impuesto Predial, Industria y Comercio (ICA), licencias de construcción y certificado de residencia.',
      category: 'procedures',
      year: 2026,
      datePublished: '2026-01-20',
      fileFormat: 'PDF',
      fileSize: '2.8 MB',
      status: 'active',
      radicationCode: 'SIB-TRM-2026',
      department: 'Secretaría de Hacienda y Atención al Ciudadano',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 'DOC-2026-003',
      title: '3.1 Plan Anual de Adquisiciones (PAA) - Vigencia 2026',
      description: 'Publicación oficial del Plan Anual de Adquisiciones en SECOP II con el presupuesto proyectado para la compra de bienes, obras y servicios del Municipio de Sibundoy.',
      category: 'contracting',
      year: 2026,
      datePublished: '2026-01-31',
      fileFormat: 'XLSX',
      fileSize: '1.9 MB',
      status: 'active',
      radicationCode: 'SECOP-PAA-2026',
      department: 'Oficina de Contratación Estatal',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 'DOC-2026-004',
      title: '4.1 Certificado de Cumplimiento de Software Legal - Vigencia 2024-2026',
      description: 'Certificación de auditoría que avala la legalidad y licenciamiento del software de la infraestructura tecnológica de la Alcaldía de Sibundoy.',
      category: 'control',
      year: 2026,
      datePublished: '2026-02-05',
      fileFormat: 'PDF',
      fileSize: '890 KB',
      status: 'active',
      radicationCode: 'CTRL-SOFT-2026',
      department: 'Oficina de Control Interno y TIC',
      downloadUrl: '#'
    },
    {
      id: 'DOC-2026-005',
      title: '5.3 Metas, Objetivos e Indicadores de Gestión del Plan de Desarrollo 2024-2027',
      description: 'Evaluación periódica de indicadores de impacto social, avance físico de metas y desarrollo sostenible para el Valle de Sibundoy.',
      category: 'planning',
      year: 2026,
      datePublished: '2026-02-14',
      fileFormat: 'PDF',
      fileSize: '5.2 MB',
      status: 'active',
      radicationCode: 'PLN-IND-2026',
      department: 'Secretaría de Planeación Municipal',
      downloadUrl: '#'
    },
    {
      id: 'DOC-2026-006',
      title: '6.3 Presupuesto General de Rentas y Gastos del Municipio de Sibundoy 2026',
      description: 'Acuerdo municipal sancionado con la aprobación del Presupuesto General para programas de educación, salud, cultura e infraestructura.',
      category: 'budget',
      year: 2026,
      datePublished: '2026-01-15',
      fileFormat: 'PDF',
      fileSize: '6.1 MB',
      status: 'active',
      radicationCode: 'SIB-FIN-2026-001',
      department: 'Secretaría de Hacienda Pública',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 'DOC-2026-007',
      title: '7.1 Decreto 018 de 2026: Protección del Patrimonio Cultural e Idioma Kamëntsá',
      description: 'Normativa municipal que consagra medidas para la preservación de la lengua nativa Kamëntsá y la soberanía artesanal del Valle de Sibundoy.',
      category: 'regulations',
      year: 2026,
      datePublished: '2026-02-10',
      fileFormat: 'PDF',
      fileSize: '1.4 MB',
      status: 'active',
      radicationCode: 'DEC-018-2026',
      department: 'Despacho del Alcalde Municipal',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 'DOC-2025-008',
      title: '8.1 Directorio Institucional, Escala Salarial y Organigrama de la Entidad',
      description: 'Directorio de funcionarios públicos, canales de atención, asignación básica mensual y mapa de procesos institucional.',
      category: 'entity_info',
      year: 2025,
      datePublished: '2025-03-01',
      fileFormat: 'XLSX',
      fileSize: '1.1 MB',
      status: 'active',
      radicationCode: 'DIR-INST-2025',
      department: 'Subsecretaría de Talento Humano',
      downloadUrl: '#'
    },
    {
      id: 'DOC-2025-009',
      title: '9.2 Estrategia de Presupuesto Participativo y Mesas de Concertación',
      description: 'Mecanismos de consulta ciudadana y audiencias comunitarias para la priorización de inversión en veredas y barrios de Sibundoy.',
      category: 'participation',
      year: 2025,
      datePublished: '2025-09-18',
      fileFormat: 'PDF',
      fileSize: '2.5 MB',
      status: 'active',
      radicationCode: 'PART-PRES-2025',
      department: 'Secretaría de Gobierno y Participación',
      downloadUrl: '#'
    },
    {
      id: 'DOC-2025-010',
      title: '10.1 Conjunto de Datos Abiertos de Obras Públicas y Ejecución Contractual',
      description: 'Matriz en formato abierto reutilizable (.CSV / .JSON) con el histórico de contratos estatales y licitaciones del municipio.',
      category: 'open_data',
      year: 2025,
      datePublished: '2025-11-05',
      fileFormat: 'ZIP',
      fileSize: '12.4 MB',
      status: 'active',
      radicationCode: 'DAT-OPEN-2025',
      department: 'Oficina de Sistemas y Datos Abiertos',
      downloadUrl: '#'
    }
  ]);

  // Computed Signal for Filtering Documents
  readonly filteredDocuments = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const category = this.selectedCategory();
    const year = this.selectedYear();
    const status = this.selectedStatus();

    return this.rawDocuments().filter((doc: TransparencyDocument) => {
      // Search term matching
      const matchesSearch = !term || 
        doc.title.toLowerCase().includes(term) ||
        doc.description.toLowerCase().includes(term) ||
        doc.radicationCode.toLowerCase().includes(term) ||
        doc.department.toLowerCase().includes(term);

      // Category matching
      const matchesCategory = category === 'all' || doc.category === category;

      // Year matching
      const matchesYear = year === 'all' || doc.year.toString() === year;

      // Status matching
      const matchesStatus = status === 'all' || doc.status === status;

      return matchesSearch && matchesCategory && matchesYear && matchesStatus;
    });
  });

  // Computed signal for total results
  readonly totalResults = computed(() => this.filteredDocuments().length);

  // Computed category count map
  readonly categoryCounts = computed(() => {
    const docs = this.rawDocuments();
    const counts: Record<string, number> = { all: docs.length };
    
    docs.forEach((doc: TransparencyDocument) => {
      counts[doc.category] = (counts[doc.category] || 0) + 1;
    });

    return counts;
  });

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  // State Mutator Actions
  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  setCategory(category: CategoryType): void {
    this.selectedCategory.set(category);
  }

  setYear(year: string): void {
    this.selectedYear.set(year);
  }

  setStatus(status: DocumentStatusType): void {
    this.selectedStatus.set(status);
  }

  setViewMode(mode: ViewModeType): void {
    this.viewMode.set(mode);
  }

  setLanguage(lang: LanguageType): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  toggleHighContrast(): void {
    this.isHighContrast.update((val: boolean) => !val);
    if (typeof document !== 'undefined') {
      if (this.isHighContrast()) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    }
  }

  setFontSize(size: 'sm' | 'md' | 'lg'): void {
    this.fontSize.set(size);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
      if (size === 'sm') document.documentElement.classList.add('text-sm');
      if (size === 'md') document.documentElement.classList.add('text-base');
      if (size === 'lg') document.documentElement.classList.add('text-lg');
    }
  }

  openDocumentModal(doc: TransparencyDocument): void {
    this.selectedDocument.set(doc);
  }

  closeDocumentModal(): void {
    this.selectedDocument.set(null);
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('all');
    this.selectedYear.set('all');
    this.selectedStatus.set('all');
  }
}
