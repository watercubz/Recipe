import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  InitialRoutes(): string[] {
    return [
      'Hi',
      'welcome to the Rest API with nestjs',
      'Route',
      'http://localhost:3000/recipe',
    ];
  }
}
