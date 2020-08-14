import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private sharedService: SharedService ){
        this.sharedService = SharedService.getInstance();
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        
        if(this.sharedService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    
}