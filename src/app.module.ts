import { PetsModule } from './pets/pets.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    // register the modules : features
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    PetsModule,
  ],
  controllers: [
    // register the controller
    AppController,
  ],
  providers: [
    // register the services
    AppService,
  ],
})
export class AppModule {}
