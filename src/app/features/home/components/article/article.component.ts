import { Component, input } from '@angular/core';
import { Article } from '../../models.types';
import { DatePipe } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe, NgxSkeletonLoaderModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  article = input.required<Article>()
}
