import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

    shared: SharedService;

    constructor(private router: Router ){
        this.shared = SharedService.getInstance();
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        
        if(this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    
}