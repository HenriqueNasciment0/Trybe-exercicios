import connection from '../models/connection';
import BookModel from '../models/user.model';
import User from '../interfaces/users.interfaces';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default BookService;
