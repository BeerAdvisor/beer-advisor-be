import { createParamDecorator } from '@nestjs/common';
import { User } from '../../prisma/prisma.bindings.generated';

export const GqlUser = createParamDecorator((data, [root, args, ctx, info]): User => ctx.req && ctx.req.user);
