import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/common/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Books[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.booksService.getBooksList().subscribe((data) => {
      this.books = data;
    });
  }
}
