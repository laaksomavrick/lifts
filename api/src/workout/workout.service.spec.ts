import { Test, TestingModule } from '@nestjs/testing';
import { workoutService } from './workout.service';

describe('workoutService', () => {
  let service: workoutService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [workoutService],
    }).compile();
    service = module.get<workoutService>(workoutService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
