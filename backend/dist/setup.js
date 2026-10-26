import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { isLocalEnv } from './common/env.js';
export function configureApp(app) {
    const config = app.get(ConfigService);
    const trustProxy = config.get('TRUST_PROXY');
    if (trustProxy) {
        const express = app.getHttpAdapter().getInstance();
        express.set('trust proxy', /^\d+$/.test(trustProxy) ? Number(trustProxy) : trustProxy === 'true' ? true : trustProxy);
    }
    app.use(helmet());
    app.enableCors({ origin: (config.get('CORS_ORIGIN') ?? 'http://localhost:3000').split(','), credentials: false });
    app.setGlobalPrefix('v1');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    app.enableShutdownHooks();
    if (isLocalEnv(config.get('NODE_ENV')) || config.get('DOCS_ENABLED') === 'true') {
        const doc = new DocumentBuilder()
            .setTitle('Pilbridge API')
            .setDescription('Pharmaceutical redistribution & delivery platform — MVP')
            .setVersion('0.1')
            .addBearerAuth()
            .build();
        SwaggerModule.setup('docs', app, () => SwaggerModule.createDocument(app, doc));
    }
    return app;
}
//# sourceMappingURL=setup.js.map