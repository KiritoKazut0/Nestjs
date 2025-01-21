import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
  
      const isUserExisted = await this.findByEmail(createUserDto.email);
      if (isUserExisted) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT)
      }
      const newUser = await this.userRepository.save(createUserDto)
      .catch(() =>{
        throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR)
      });
      return newUser
  }

  async findAll(): Promise<User[] | null> {
    const listUsers = await this.userRepository.find()
    .catch(() => {
      throw new HttpException('Failed to find users', HttpStatus.INTERNAL_SERVER_ERROR)
    });
    return listUsers;
  }

  async findOne(id: string) {
    return `This action returns a #${id} user`;
  }

 async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email })
      .catch(() => {
        throw new HttpException('Failed to findByEmail', HttpStatus.INTERNAL_SERVER_ERROR)
      });
    return user
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }



}
