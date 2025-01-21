import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor (private userService: UsersService){}

    async singIn(email: string, password: string): Promise<string>{

        const user = await this.userService.findByEmail(email);
        
        if (!user){
            throw new HttpException('User not existed', HttpStatus.NOT_FOUND)
        }

        if (user.password != password){
            throw new HttpException('Credencials Invalid', HttpStatus.UNAUTHORIZED)
        }
        
        const token = 'adawdawdadadawd'

        return token

    }

}
