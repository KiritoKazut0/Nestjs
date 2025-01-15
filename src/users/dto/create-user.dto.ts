import { IsNotEmpty, MinLength, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
