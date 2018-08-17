import {Observable} from 'rxjs';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export interface CanDeactivateMethod {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd  implements CanDeactivate<CanDeactivateMethod> {
  canDeactivate(component: CanDeactivateMethod,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  return component.canDeactivate();
  }
}
