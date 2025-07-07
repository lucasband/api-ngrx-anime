import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-card.html',
  styleUrls: ['./anime-card.scss']
})
export class AnimeCardComponent {
  @Input() anime: any;
}