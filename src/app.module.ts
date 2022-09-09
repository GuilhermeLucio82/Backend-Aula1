import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GeneralInfoModule } from './general-info/general-info.module';

@Module({
  imports: [PostsModule, GeneralInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
