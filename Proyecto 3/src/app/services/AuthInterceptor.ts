import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const token = this.getToken();
		if(!!token){
			request = request.clone({
				setHeaders:{
					Autorization: 'Bearer ' + token
				}
			})
		}
		return next.handle(request);
	}

	getToken(){
		return Math.random();
	}
}