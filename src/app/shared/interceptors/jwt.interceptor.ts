import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environnement.dev';
//import { environment } from 'src/environnement/environnement.dev';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	apiUrl = environment.apiUrl;

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		var token = localStorage.getItem('token');

		const isApiUrl = request.url.startsWith(this.apiUrl);
		if (token && isApiUrl) {
          token = (token.startsWith("Bearer ") ? "" : "Bearer ")  + token;
			request = request.clone({
				setHeaders: { Authorization: token }
		 	});
		}
		return next.handle(request);
	}
}
