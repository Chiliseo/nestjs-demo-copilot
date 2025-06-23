import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string; // Optional for sign-in purposes
};

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'password123',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@email.com',
      password: 'password456',
    },
  ];

  async findOne(id: number): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.id === id);
      resolve(user);
    });
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.email === email);
      resolve(user);
    });
  }
}
