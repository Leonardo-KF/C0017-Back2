import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceListService } from './attendance-list.service';

describe('AttendanceListService', () => {
  let service: AttendanceListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceListService],
    }).compile();

    service = module.get<AttendanceListService>(AttendanceListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
