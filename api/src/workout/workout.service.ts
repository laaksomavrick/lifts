import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkoutDto } from './workout.dto';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto) {
    return await this.workoutRepository.save(createWorkoutDto);
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutRepository.find({ select: ['name', 'ordinal'] });
  }
}
