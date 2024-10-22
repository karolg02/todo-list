import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query, UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoNotfoundException } from '../../exceptions/todo-notfound-exception';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoFilterDto } from './dto/todo-filter.dto';
import { TokenGuard } from '../auth/token.guard';
import { UserID } from '../auth/user.decorator';

@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) {
  }
  //by userid
  @Get()
  @UseGuards(TokenGuard)
  listTodo(@Query() filter: TodoFilterDto, @UserID() userid: number){
    return this.todoService.listTodo(filter, userid);
  }

  @Get(":id")
  @UseGuards(TokenGuard)
  async getTodo(@Param("id", ParseIntPipe) id:number, @UserID() userid: number){
    const todo = await this.todoService.get(id, userid);
    if(!todo) throw new TodoNotfoundException();

    return todo;
  }

  @Post()
  @UseGuards(TokenGuard)
  addTodo(@Body() data: CreateTodoDto, @UserID() userid: number){
    return this.todoService.addTodo(data, userid);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(TokenGuard)
  async deleteTodo(@Param("id", ParseIntPipe) id:number, @UserID() userid: number){
    const todo = await this.todoService.get(id, userid);
    if(!todo) throw new TodoNotfoundException();

    await this.todoService.deleteToDo(id);
  }

  @Put(":id")
  @UseGuards(TokenGuard)
  async editTodo(@Param("id", ParseIntPipe) id:number, @Body() data: EditTodoDto, @UserID() userid: number){
    const todo = await this.todoService.get(id, userid);
    if(!todo) throw new TodoNotfoundException();

    return this.todoService.editTodo(id, data);
  }
}
