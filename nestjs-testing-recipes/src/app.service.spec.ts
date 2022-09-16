import { AppService } from './app.service';
import { Test } from '@nestjs/testing';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello, World!"', () => {
      expect(appService.getHello()).toBe('Hello, World!');
    });

    it('should return "Hello, Tester', () => {
      expect(appService.getHello('Tester')).toBe('Hello, Tester!');
    });
  });
});
