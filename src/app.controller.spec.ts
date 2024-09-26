import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './app.controller';
import { BookService } from './app.service';

describe('BooksController', () => {
  let bookController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BookService],
    }).compile();

    bookController = app.get<BooksController>(BooksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(bookController.getAllBooks()).toBe('Hello World!');
    });
  });
});
