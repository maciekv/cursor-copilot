import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: User): User {
    return this.usersService.createUser(user);
  }

  @Get()
  findAllUsers(): User[] {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id: number): User | undefined {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updatedUser: Partial<User>,
  ): User | undefined {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): boolean {
    return this.usersService.deleteUser(id);
  }

  @Get('email/:email')
  findUserByEmail(@Param('email') email: string): User | undefined {
    return this.usersService.findUserByEmail(email);
  }
}
