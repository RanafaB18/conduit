import { Component, input, model } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss'
})
export class FeedsComponent {
  tag = model.required<string | undefined>()
}
