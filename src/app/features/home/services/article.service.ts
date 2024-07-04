import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, lastValueFrom } from 'rxjs';
import { ArticleResponse, Filters } from '../models.types';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = environment.baseUrl;
  #http = inject(HttpClient);
  

  constructor() { }

  getGlobalFeed(pageNumber: number, filters?: Filters) {
    const offset = pageNumber * 10 - 10 ;
    const defaultParams = { limit: 10, offset, ...filters }
    let params;
    filters && (params = this.toHttpParams(defaultParams));
    return lastValueFrom(
      this.#http.get<ArticleResponse>(`${this.baseUrl}/articles`, { params }))
  }

  getTags() {
    return lastValueFrom(
      this.#http.get<{tags: string[]}>(`${this.baseUrl}/tags`))
  }

  toHttpParams(obj: Record<string, string | number | boolean>): HttpParams {
    let params = new HttpParams();
    for (const key in obj) {
      if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
        const value = obj[key];
        params = params.set(key, value);
      }
    }
    return params;
  }
}
