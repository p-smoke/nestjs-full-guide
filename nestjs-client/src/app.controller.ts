import { Controller, Get, Inject, Query, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SkipThrottle } from '@nestjs/throttler';

import { Request } from 'express';

@SkipThrottle(false)
@Controller('fib')
export class AppController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get()
  async getNthFib(@Query('n') n: number, @Req() req: Request) {
    this.client.emit('url_hit', { url: req.url });

    return this.client.send({ cmd: 'nthFib' }, n);
  }
}
