import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ZonasModule } from './zones/zones.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ZonasModule,

    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const expiresIn = '1h';

        return {
          secret: configService.get<string>('JWT_SECRET', 'secretKey'),
          signOptions: {
            expiresIn,
          },
        };
      },
    }),

    PassportModule,
  ],
  controllers: [],
  providers: [
    AppService,
    JwtStrategy,
    RolesGuard,
  ],
})
export class AppModule {}
