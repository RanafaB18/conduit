import { Component, computed, effect, inject, signal } from '@angular/core';
import { FeedsComponent } from './components/feeds/feeds.component';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { mockArticles } from '../../core/mockdata';
import { ArticleLoaderComponent } from './components/article-loader/article-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedsComponent, ArticleComponent, ArticleLoaderComponent, NgxSkeletonLoaderModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #articleService = inject(ArticleService);

  currentPage = signal<number>(1);

  // articlesQuery = injectQuery(() => ({
  //   queryKey: ['articles', this.currentPage()],
  //   queryFn: () => this.#articleService.getGlobalFeed(this.currentPage())
  // }))

  // tagsQuery = injectQuery(() => ({
  //   queryKey: ['tags'],
  //   queryFn: () => this.#articleService.getTags()
  // }))
  totalPages = signal<number[]>([])

  articles = mockArticles.articles;
  
  tags = [
    "eos",
    "est",
    "ipsum",
    "enim",
    "repellat",
    "quia",
    "exercitationem",
    "consequatur",
    "facilis",
    "tenetur"
];

  selectedTag = signal<string>('')

  constructor() {
    // effect(() => {
    //   if (this.articlesQuery.data() && this.articlesQuery.data()?.articlesCount) {
    //     this.totalPages.set(Array.from(new Array(Math.ceil(this.articlesQuery.data()!.articlesCount / 10)), (val, index) => index + 1))
    //     console.log('Total Pages', this.totalPages());
    //   }
    // }, { allowSignalWrites: true })
  }
  getFeedForTag(tag: string) {
    this.selectedTag.set(tag)
  }

createRange(range: number) {
  
  return Array.from({length: range}, (_, i) => i + 1)
}
}
