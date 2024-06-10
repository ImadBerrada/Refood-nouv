import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaiementServiceBase } from "./base/paiement.service.base";

@Injectable()
export class PaiementService extends PaiementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
