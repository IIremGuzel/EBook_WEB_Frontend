import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../common/books';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl = 'http://localhost:8080/api/books';

  constructor(private httpClient: HttpClient) {}

  getBooksList(): Observable<Books[]> {
    const requestOptions = {
      withCredentials: true, // CORS için gerekli olan withCredentials özelliği
    };
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.books));
  }
}

interface GetResponse {
  _embedded: {
    books: Books[];
  };
}
