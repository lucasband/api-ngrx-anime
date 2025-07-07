import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListService } from './services/anime-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Testando Apollo</h1>`,
})
export class App {
  constructor(private animeService: AnimeListService) {}

  //Teste de consumo de api 

  // ngOnInit() {
  //   this.animeService.searchAnime('Naruto').subscribe({
  //     next: (result) => {
  //       console.log('Resultado Apollo:', result.data?.Page?.media);
  //     },
  //     error: (err) => {
  //       console.error('Erro na consulta Apollo:', err);
  //     },
  //   });
  // }
  
}