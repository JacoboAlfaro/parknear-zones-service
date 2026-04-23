import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZonasModule } from './zones/zones.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    ZonasModule,

    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),

    PassportModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    RolesGuard,
  ],
})
export class AppModule {}
