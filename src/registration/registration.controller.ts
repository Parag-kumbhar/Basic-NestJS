// import { Controller, Put , Post, Get, Body, UseInterceptors, UploadedFile, Param , Delete} from '@nestjs/common';
// import { RegistrationService } from './registration.service';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';

// @Controller('users')
// export class RegistrationController {
//   constructor(private readonly registrationService: RegistrationService) { }

//   @Post('register')
//   @UseInterceptors(
//     FileInterceptor('file', {
//       storage: diskStorage({
//         destination: './uploads',
//         filename: (req, file, callback) => {
//           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//           callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
//         },
//       }),

//     }),
//   )
//   async registerUser(@Body() userData, @UploadedFile() file: Express.Multer.File) {
//     return this.registrationService.registerUser(userData, file);
//   }
//   @Get(':id')
//   async getUserById(@Param('id') id: number) {
//     return this.registrationService.getUserById(id);
//   }

//   @Delete(':id')
//   async deleteUser(@Param('id') id: number) {
//     return this.registrationService.deleteUser(id);
//   }

//   @Put(':id')
//   async updateUser(@Param('id') id: number, @Body() userData) {
//     return this.registrationService.updateUser(id, userData);
//   }

// }  



import { Controller, Put, Post, Get, Body, UseInterceptors, UploadedFile, Param, Delete } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('register')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async registerUser(@Body() userData, @UploadedFile() file: Express.Multer.File) {
    return this.registrationService.registerUser(userData, file);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.registrationService.getUserById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.registrationService.deleteUser(id);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async updateUser(@Param('id') id: number, @Body() userData, @UploadedFile() file?: Express.Multer.File) {
    return this.registrationService.updateUser(id, userData, file);
  }
}
 

