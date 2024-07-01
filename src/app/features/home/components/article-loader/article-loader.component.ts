import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-article-loader',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './article-loader.component.html',
  styleUrl: './article-loader.component.scss'
})
export class ArticleLoaderComponent {

}
