import { createParamDecorator, ReflectMetadata } from '@nestjs/common';
import { Request, Response } from 'express';

export const ReqGql = createParamDecorator((data, [root, args, ctx, info]): Request => ctx.req);

export const ResGql = createParamDecorator((data, [root, args, ctx, info]): Response => ctx.res);
