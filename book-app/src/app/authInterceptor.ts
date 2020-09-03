import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            const cloned = req.clone({ headers: req.headers.append('Authorization', `Bearer ${jwt}`) });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
    




}