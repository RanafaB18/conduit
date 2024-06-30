import { Component, signal } from '@angular/core';
import { FeedsComponent } from './components/feeds/feeds.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tags = [
    'eos',
    'est',
    'ipsum',
    'politics',
    'tech',
    'quia',
    'exercitationem',
    'consequatur',
    'facilis',
    'tenatur',
  ];

  selectedTag = signal<string>('')

  getFeedForTag(tag: string) {
    this.selectedTag.set(tag)
  }
}
