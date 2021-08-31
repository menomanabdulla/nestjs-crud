import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
   constructor(@InjectModel('Item') private readonly  itemModel: Model<Item>){}
    async findAll() : Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: String): Promise<Item>{
        return await this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item>{
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: String): Promise<Item>{
        return await this.itemModel.findByIdAndDelete(id);
    }

    async update(id: String, item: Item): Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item);
    }

}
