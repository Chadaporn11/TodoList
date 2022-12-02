/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { GroupFilter } from './dto/group-filter.dto';

@UseGuards(JwtAuthGuard)
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('createGroup')
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  //Pattren apiurl/searchGroup?="keyword"
  @Get('searchGroup/:id')
  GetGroup(@Param('id') id: string,@Query() filterDtp: GroupFilter){
    if(Object.keys(filterDtp).length)
      return this.groupService.getGroupByFilter(+id,filterDtp)
    else 
      return this.groupService.findGroupByUserId(+id)
  }

  @Get('getGroup/:id')
  findOne(@Param('id') id: string) {
    return this.groupService.findGroupByUserId(+id);
  }

  @Patch('updataGroup/:id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete('deleteGroup/:id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}