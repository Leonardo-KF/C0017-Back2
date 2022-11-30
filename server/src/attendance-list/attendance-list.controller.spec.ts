import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceListController } from './attendance-list.controller';
import { AttendanceListService } from './attendance-list.service';

describe('AttendanceListController', () => {
  let controller: AttendanceListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceListController],
      providers: [AttendanceListService],
    }).compile();

    controller = module.get<AttendanceListController>(AttendanceListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
