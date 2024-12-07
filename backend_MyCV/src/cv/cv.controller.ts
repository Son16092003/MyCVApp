import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CvService } from './cv.service';
import { Cv } from './entities/cv.entity';

@Controller('cv_form')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get(':id')
  async getCv(@Param('id') id: string): Promise<Cv> {
    return this.cvService.getCv(id); // Corrected this line
  }

  @Get('/user/:userId')
  async getCvByUserId(@Param('userId') userId: string): Promise<Cv> {
    return this.cvService.getCvByUserId(userId); // Ensure userId is treated as a string
  }

  @Get()
  async getAllCvs(): Promise<Cv[]> {
    return this.cvService.getAllCvs();
  }

  @Post()
  async createCv(@Body() createCvDto: any): Promise<Cv> {
    console.log('Received Data:', createCvDto);
    return this.cvService.createCv(createCvDto);
  }

  @Put(':id')
  async updateCv(
    @Param('id') id: string,
    @Body() updateCvDto: any,
  ): Promise<Cv> {
    return this.cvService.updateCv(id, updateCvDto);
  }

  @Get('/exists/:userId')
  async checkUserExists(
    @Param('userId') userId: string,
  ): Promise<{ exists: boolean }> {
    const exists = await this.cvService.checkUserExists(userId);
    return { exists };
  }
}
