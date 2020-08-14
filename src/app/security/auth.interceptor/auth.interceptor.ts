import { SharedService } from './../../services/shared/shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private sharedService: SharedService) {
        this.sharedService = SharedService.getInstance();
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest : any;

        if(this.sharedService.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : this.sharedService.token
                }
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
    
}
