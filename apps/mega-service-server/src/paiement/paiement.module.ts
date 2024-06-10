import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaiementModuleBase } from "./base/paiement.module.base";
import { PaiementService } from "./paiement.service";
import { PaiementController } from "./paiement.controller";
import { PaiementResolver } from "./paiement.resolver";

@Module({
  imports: [PaiementModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaiementController],
  providers: [PaiementService, PaiementResolver],
  exports: [PaiementService],
})
export class PaiementModule {}
