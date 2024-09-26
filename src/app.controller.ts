import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './fakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks()
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string) : Book | undefined {
    const bookID = +id
    return this.booksService.findById(bookID)
  }
}
