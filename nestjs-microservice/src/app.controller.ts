import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

function fib(n) {
  if (n <= 1) return 0;
  if (n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

@Controller()
export class AppController {
  // Request-Response based pattern of writing a microservice
  @MessagePattern({ cmd: 'nthFib' })
  sendNthFib(n: number): string {
    return `Fib (${n}) => ${fib(n)}`;
  }

  // Event based pattern
  @EventPattern('url_hit')
  handleUrlHit({ url }) {
    console.log(url);
  }
}
