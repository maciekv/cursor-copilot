import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '345-678-9012',
    },
  ];

  public createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  public findAllUsers(): User[] {
    return this.users;
  }

  public findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public updateUser(id: number, updatedUser: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return undefined;
  }

  public deleteUser(id: number): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  public findUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
