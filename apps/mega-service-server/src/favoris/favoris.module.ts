import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavorisModuleBase } from "./base/favoris.module.base";
import { FavorisService } from "./favoris.service";
import { FavorisController } from "./favoris.controller";
import { FavorisResolver } from "./favoris.resolver";

@Module({
  imports: [FavorisModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavorisController],
  providers: [FavorisService, FavorisResolver],
  exports: [FavorisService],
})
export class FavorisModule {}
