import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { delay, lastValueFrom } from 'rxjs';
import { ArticleResponse } from '../models.types';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = environment.baseUrl;
  #http = inject(HttpClient);
  

  constructor() { }

  getGlobalFeed(pageNumber: number) {
    const offset = pageNumber * 10 - 10 ;
    return lastValueFrom(
      this.#http.get<ArticleResponse>(`${this.baseUrl}/articles`, { params: { limit: 10, offset }}).pipe(delay(10000)),
    )
  }

  getTags() {
    return lastValueFrom(
      this.#http.get<{tags: string[]}>(`${this.baseUrl}/tags`).pipe(delay(10000))
    )
  }
}
