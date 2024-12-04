import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService {
  [x: string]: any;
  constructor(@InjectModel(Cv.name) private readonly cvModel: Model<Cv>) {}

  async getCvByUserId(userId: string): Promise<Cv> {
    return this.cvModel.findOne({ userId: userId }); // Ensure userId is treated as a string
  }
  
  async createCv(data: any): Promise<Cv> {
    const newCv = new this.cvModel(data);
    return newCv.save();
  }

  async updateCv(id: string, data: any): Promise<Cv> {
    return this.cvModel.findByIdAndUpdate(id, data, { new: true });
  }

  async getCv(id: string): Promise<Cv> {
    return this.cvModel.findById(id);
  }

  async deleteCv(id: string): Promise<Cv> {
    return this.cvModel.findByIdAndDelete(id);
  }

  async getAllCvs(): Promise<Cv[]> {
    return this.cvModel.find();
  }

  
}
