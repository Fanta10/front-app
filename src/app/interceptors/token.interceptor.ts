import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { ApiErrorService } from '../_subjects/api-error.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenService, private apiErrorService: ApiErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const token = this.tokenService.getToken()

    // SI token à insérer dans le header
    if(token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+token)
      })
      console.log(clone)
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error)

          if(error.status === 401){
            this.tokenService.clearTokenExpired()
          }

          this.apiErrorService.sendError(error.error.message)
          return throwError('Session Expired')
        })
      )
    }

    return next.handle(request);
  }
}
export const TokenInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi:true
}
