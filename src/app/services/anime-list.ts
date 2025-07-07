import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';

@Injectable({ providedIn: 'root' })
export class AnimeListService {
  constructor(private apollo: Apollo) {}

  searchAnime(title: string) {
    return this.apollo.query({
      query: gql`
        query ($search: String) {
          Page(page: 1, perPage: 10) {
            media(search: $search, type: ANIME) {
              id
              title {
                romaji
              }
              coverImage {
                large
              }
            }
          }
        }
      `,
      variables: { search: title },
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    });
  }
}