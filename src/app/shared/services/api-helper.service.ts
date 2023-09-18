import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
} from '@angular/common/http';

export enum HTTPS_METHODS {
  'GET',
  'POST',
  'PUT',
  'DELETE',
}

const BASE_URL = 'https:/pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class ApiHelper {
  /**
   *
   */
  constructor(private http: HttpClient) {}
  callWithLoading<T = any>(method: HTTPS_METHODS, url: string, params?: any) {
    switch (method) {
      case HTTPS_METHODS.GET:
        return this.http.get<T>(url, { params });
      case HTTPS_METHODS.POST:
        return this.http.post<T>(url, params);
      case HTTPS_METHODS.PUT:
        return this.http.put<T>(url, params);
      case HTTPS_METHODS.DELETE:
        return this.http.delete<T>(url, { params });
    }
  }

  callWithoutLoading<T = any>(
    method: HTTPS_METHODS,
    url: string,
    params?: any
  ) {
    switch (method) {
      case HTTPS_METHODS.GET:
        return this.http.get<T>(url, { params });
      case HTTPS_METHODS.POST:
        return this.http.post<T>(url, params);
      case HTTPS_METHODS.PUT:
        return this.http.put<T>(url, params);
      case HTTPS_METHODS.DELETE:
        return this.http.delete<T>(url, { params });
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenicateInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ApiHelperInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiRequest = req.clone({ url: `${BASE_URL}${req.url}` });
    const header = apiRequest.headers.set('Access-Control-Allow-Origin', '*');
    return next.handle(apiRequest);
  }
}
