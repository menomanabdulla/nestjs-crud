import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "3434352",
            qty: 30,
            name: "Item one",
            descrption: "This is item One"
        },
        {
            id: "3434353",
            qty: 50,
            name: "Item Two",
            descrption: "This is item Two"
        }
    ];
    findAll() : Item[] {
        return this.items;
    }

    findOne(id: String): Item{
        return this.items.find( item => item.id === id );
    }
    
}
