import connection from '../models/connection';
import UsersModel from '../models/user.model';
import User from '../interfaces/users.interfaces';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }
}

export default UsersService;
