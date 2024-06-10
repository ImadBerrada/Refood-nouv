import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavorisService } from "./favoris.service";
import { FavorisControllerBase } from "./base/favoris.controller.base";

@swagger.ApiTags("favorises")
@common.Controller("favorises")
export class FavorisController extends FavorisControllerBase {
  constructor(
    protected readonly service: FavorisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
