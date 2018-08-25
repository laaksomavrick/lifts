import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { CreateWorkoutDto } from './workout.dto';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return await this.workoutService.create(createWorkoutDto);
  }

  @Get()
  async findAll(@Query() query) {
    return await this.workoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return {};
  }

  /*@Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return {};
  }*/

  @Delete(':id')
  remove(@Param('id') id) {
    return {};
  }
}
