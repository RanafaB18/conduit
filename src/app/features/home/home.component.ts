import { Component, inject, signal } from '@angular/core';
import { FeedsComponent } from './components/feeds/feeds.component';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { mockArticles } from '../../core/mockdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedsComponent, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  #articleService = inject(ArticleService);

  currentPage = signal<number>(1);

  articlesQuery = injectQuery(() => ({
    queryKey: ['articles', this.currentPage()],
    queryFn: () => this.#articleService.getGlobalFeed(this.currentPage())
  }))

  tagsQuery = injectQuery(() => ({
    queryKey: ['tags'],
    queryFn: () => this.#articleService.getTags()
  }))

  articles = mockArticles;
  
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

  getFeedForTag(tag: string) {
    this.selectedTag.set(tag)
  }
}
