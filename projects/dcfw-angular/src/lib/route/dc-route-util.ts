import { Observable, of as observableOf } from 'rxjs';
import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, PreloadingStrategy, Route, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

export class PreloadSelectedModulesStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      return load();
    } else {
      return observableOf(null);
    }
  }
}

export function notNull(input: any[]): any[] {
  if (input) {
    return input;
  }
  return [];
}
