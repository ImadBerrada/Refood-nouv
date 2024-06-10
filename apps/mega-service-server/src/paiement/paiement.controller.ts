import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaiementService } from "./paiement.service";
import { PaiementControllerBase } from "./base/paiement.controller.base";

@swagger.ApiTags("paiements")
@common.Controller("paiements")
export class PaiementController extends PaiementControllerBase {
  constructor(
    protected readonly service: PaiementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
