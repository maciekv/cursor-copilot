import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './users.entity';
let service: UsersService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [UsersService],
  }).compile();

  service = module.get<UsersService>(UsersService);
});

describe('createUser', () => {
  it('should create a user and return that user', () => {
    const newUser: User = {
      id: 4,
      name: 'New User',
      email: 'new.user@example.com',
      phone: '456-789-0123',
      birthDate: new Date('2000-01-01'), // Added birthDate as it is required in User entity
    };
    const service = new UsersService();
    expect(service.createUser(newUser)).toEqual(newUser);
  });
});

describe('findAllUsers', () => {
  it('should return an array of users', () => {
    expect(service.findAllUsers()).toBeInstanceOf(Array);
  });
});

describe('findUserById', () => {
  it('should return a single user if the user exists', () => {
    const user = service.findUserById(1);
    expect(user).toBeDefined();
    expect(user.id).toBe(1);
  });

  it('should return undefined if the user does not exist', () => {
    const user = service.findUserById(999);
    expect(user).toBeUndefined();
  });
});

describe('updateUser', () => {
  it('should update the user details and return the updated user', () => {
    const updatedUser: Partial<User> = { name: 'Updated Name' };
    const user = service.updateUser(1, updatedUser);
    expect(user).toBeDefined();
    expect(user.name).toBe('Updated Name');
  });

  it('should return undefined if the user to update does not exist', () => {
    const updatedUser: Partial<User> = { name: 'Updated Name' };
    const user = service.updateUser(999, updatedUser);
    expect(user).toBeUndefined();
  });
});

describe('deleteUser', () => {
  it('should delete the user and return true', () => {
    expect(service.deleteUser(1)).toBeTruthy();
  });

  it('should return false if the user to delete does not exist', () => {
    expect(service.deleteUser(999)).toBeFalsy();
  });
});

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
