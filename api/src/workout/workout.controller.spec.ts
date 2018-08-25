import { Test, TestingModule } from '@nestjs/testing';
import { workoutController } from './workout.controller';

describe('workout Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [workoutController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: workoutController = module.get<workoutController>(
      workoutController,
    );
    expect(controller).toBeDefined();
  });
});
