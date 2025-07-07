import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimeListService } from './services/anime-list';
import { AnimeCardComponent } from './shared/anime-card/anime-card';
import { Navbar } from "./shared/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimeCardComponent, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  searchTerm = 'HunterxHunter'
  animes: any[] = [];
  loading = false;

  constructor(private animeService: AnimeListService) {}

  buscar() {
    this.loading = true;
    this.animeService.searchAnime(this.searchTerm).subscribe({
      next: (res) => {
        this.animes = res.data.Page.media;
        this.loading = false;
      },
      error: () => {
        this.animes = [];
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.buscar();
  }
}