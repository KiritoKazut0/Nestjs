import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor (@InjectRepository(User) private userRepository: Repository<User>){}

 async create(createUserDto: CreateUserDto){
    const newUser = await this.userRepository.insert(createUserDto);
    console.log(newUser)
    return newUser
  }

 async findAll(): Promise<User[] | null> {
    const listUsers = await this.userRepository.find();
    return listUsers;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
