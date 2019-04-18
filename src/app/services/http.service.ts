import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {UtilityService} from './utility.service';
import {tap} from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs';
import {of} from 'rxjs/internal/observable/of';


const maxAge = 3000000;
@Injectable()
export class RequestCache  {

  cache = new Map();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.url;
    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    const expired = Date.now() - maxAge;
    this.cache.forEach(expiredEntry => {
      if (expiredEntry.lastRead < expired) {
        this.cache.delete(expiredEntry.url);
      }
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor {

  constructor(private cache: RequestCache) {}
  private requestNumber = 0;

  public getRequestCount() {
    return this.requestNumber;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.put(req, event);
        }
      })
    );
  }

/*  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.create(this.handleAccess(request, next));
  }*/

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
    Promise<HttpEvent<any>> {
    // const token = await this.msalService.getAccessToken();
    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }

    headerSettings['Content-Type'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);
    this.requestNumber++;
    this.stopLoader(this.requestNumber);
    changedRequest = request.clone({headers: newHeader});
    return next.handle(changedRequest)
      .toPromise()
      .then(
        response => {
          this.requestNumber--;
          this.stopLoader(this.requestNumber);
          return response;
        })
      .catch(
        response => {
          this.requestNumber--;
          this.stopLoader(this.requestNumber);
          throw response;
        }
      );
  }

  stopLoader(requestNumber: number) {
    if (requestNumber > 0) {
      // this.headerService.showLoader.emit(true);
    } else {
      // this.headerService.showLoader.emit(false);
    }
  }

}
