import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface IBreadcrumb {
  label: string;
  url?: string;
  disabled?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  readonly _keyBreadcrumb = 'breadcrumb';
  private readonly _breadcrumbs$ = new BehaviorSubject<IBreadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this._breadcrumbs$.next(
      this.buildBreadcrumb(this.router.routerState.snapshot.root)
    );

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this._breadcrumbs$.next(
          this.buildBreadcrumb(this.router.routerState.snapshot.root)
        );
      });
  }

  getBreadcrumb(): Observable<IBreadcrumb[]> {
    return this._breadcrumbs$.asObservable();
  }

  private buildBreadcrumb(
    route: ActivatedRouteSnapshot | null,
    parentUrl: string[] = [],
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    if (!route) {
      return breadcrumbs;
    }

    const routeUrl = parentUrl.concat(
      route.url.map((url) => url.path).filter((path) => path !== '')
    );

    if (route.data && route.data[this._keyBreadcrumb]) {
      const breadcrumbData = route.data[this._keyBreadcrumb];
      const label = this.getLabel(route.data, breadcrumbData);

      if (label) {
        const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
        const currentUrl = '/' + routeUrl.join('/');

        if (
          !lastCrumb ||
          lastCrumb.label !== label ||
          lastCrumb.url !== currentUrl
        ) {
          const breadcrumb: IBreadcrumb = {
            label: label,
            url: currentUrl,
            disabled: !route.firstChild,
          };
          breadcrumbs.push(breadcrumb);
        }
      }
    }

    if (route.firstChild) {
      this.buildBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }

    return breadcrumbs;
  }

  private getLabel(routeData: Data, breadcrumbData: any): string | null {
    if (typeof breadcrumbData === 'string') {
      // Trường hợp là string (key i18n hoặc string)
      return breadcrumbData;
    } else if (typeof breadcrumbData === 'function') {
      return breadcrumbData(routeData);
    } else if (
      typeof breadcrumbData === 'object' &&
      breadcrumbData !== null &&
      breadcrumbData.dynamicLabelKey
    ) {
      // Trường hợp dynamic label
      const dynamicKey = breadcrumbData.dynamicLabelKey;
      const fallbackLabel = breadcrumbData.fallback || dynamicKey; // Dùng key làm fallback nếu không có fallback cụ thể

      // Lấy giá trị từ routeData (do Resolver đưa vào)
      const resolvedLabel = routeData[dynamicKey];
      return resolvedLabel != null ? String(resolvedLabel) : fallbackLabel;
    }
    return null;
  }
}
