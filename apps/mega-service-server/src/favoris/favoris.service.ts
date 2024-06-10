import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavorisServiceBase } from "./base/favoris.service.base";

@Injectable()
export class FavorisService extends FavorisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
