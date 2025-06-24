import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Language } from '@enums/common.enum';
import { AnySafeType } from '@enums/type.enum';
import { TranslationService } from '@services/translation/translation.service';
import { BehaviorSubject, Observable, filter, map, mergeMap } from 'rxjs';

export interface PageTitleData {
  name: string;
  nameEn: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitleSubject = new BehaviorSubject<PageTitleData>({ name: '', nameEn: '' });
  public pageTitle$ = this.pageTitleSubject.asObservable();
  private lang$: Observable<AnySafeType>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translationService: TranslationService
  ) {
    this.lang$ = this.translationService.getLang();
    this.initRouteMonitoring();
  }

  /**
   * Monitor route changes to extract page title from route data
   */
  private initRouteMonitoring(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.findLastChild(this.activatedRoute)),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['pageTitle']) {
        this.setPageTitle(data['pageTitle']);
      }
    });
  }

  /**
   * Set page title and update document title based on current language
   */
  setPageTitle(pageTitle: PageTitleData): void {
    this.pageTitleSubject.next(pageTitle);

    // Update document title based on language
    this.lang$.subscribe(lang => {
      const title = lang === Language.Vi ? pageTitle.name : pageTitle.nameEn;
      this.titleService.setTitle(title);
    });
  }

  /**
   * Get current page title as observable
   */
  getPageTitle(): Observable<PageTitleData> {
    return this.pageTitle$;
  }

  /**
   * Set custom page title
   */
  setCustomPageTitle(pageTitle: PageTitleData): void {
    this.setPageTitle(pageTitle);
  }

  /**
   * Find the deepest active route
   */
  private findLastChild(route: ActivatedRoute): ActivatedRoute {
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return child;
  }
}
