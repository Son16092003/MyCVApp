import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cv, CvSchema } from './entities/cv.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cv.name, schema: CvSchema }]),
  ],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}


