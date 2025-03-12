// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './user.entity';
// import * as bcrypt from 'bcryptjs';

// @Injectable()
// export class RegistrationService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ) {}

//   async registerUser(userData: any, file: Express.Multer.File) {
//     const hashedPassword = await bcrypt.hash(userData.password, 10);

//     const user = this.userRepository.create({
//       ...userData,
//       password: hashedPassword,
//       filePath: file?.path || null,
//     });
     

//     return this.userRepository.save(user);
//   }
//   async getUserById(id: number) {
//     return this.userRepository.findOne({ where: { id } });
//   }
   
//   async deleteUser(id: number) {
//     const user = await this.userRepository.findOne({ where: { id } });
//     if (!user) {
//       throw new Error('User not found');
//     }
  
//     await this.userRepository.delete(id);
//     return { message: 'User deleted successfully' };
//   }
   
//   async updateUser(id: number, userData: any) {
//     const user = await this.userRepository.findOne({ where: { id } });
//     if (!user) {
//       throw new Error('User not found');
//     }
  
//     await this.userRepository.update(id, userData);
//     return { message: 'User updated successfully' };
//   }   

// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async registerUser(userData: any, file: Express.Multer.File) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
      filePath: file?.path || null, // Store profile picture   
    });

    return this.userRepository.save(user);
  }  

  async getUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.delete(id);
    return { message: 'User deleted successfully' };
  }

  async updateUser(id: number, userData: any, file?: Express.Multer.File) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    // Update text fields  
    
    user.firstName = userData.firstName || user.firstName;
    user.lastName = userData.lastName || user.lastName;
    user.dob = userData.dob || user.dob;
    user.address = userData.address || user.address;
    user.mobileNumber = userData.mobileNumber || user.mobileNumber;

    // Update profile picture if a new file is uploaded
    if (file) {
      user.filePath = file.path;
    }

    await this.userRepository.save(user);
    return { message: 'User updated successfully', user };
  }
}  


