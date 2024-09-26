import { Injectable } from '@nestjs/common';
import { Book, books } from './fakeDatabase';

@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }
  findById(bookId: number): Book | undefined {
    return books.find(book => book.id === bookId);
  }
}
