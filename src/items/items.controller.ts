import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {

    constructor(private readonly itemService : ItemsService ) {}

    @Post()
    create(@Body() createItemDto:CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Get()
    findAll(): Promise<Item[]> {
      return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Item> {
      return this.itemService.findOne(param.id);
    }

    @Put(':id')
    update(@Param() param, @Body() createItemDto : CreateItemDto): string{
      return `Congratulations ${createItemDto.name}, your item is successfully Updated`;
    }

    @Delete(':id')
    remove(@Param() param) : string{
      return `${param.id} Item removed`;
    }

}
