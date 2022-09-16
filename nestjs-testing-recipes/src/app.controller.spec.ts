import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: jest.fn().mockReturnValue('Hello, World!'),
          },
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  describe('GET /', () => {
    it('should return "Hello, World!"', () => {
      expect(appController.getHello()).toBe('Hello, World!');
    });
  });

  describe('GET /?name=Tester', () => {
    it('should return "Hello, Tester!"', () => {
      appService.getHello = jest.fn().mockReturnValue('Hello, Tester!');
      expect(appController.getHello('Tester')).toBe('Hello, Tester!');
    });
  });
});
