/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RestaurantService } from "../restaurant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RestaurantCreateInput } from "./RestaurantCreateInput";
import { Restaurant } from "./Restaurant";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantWhereUniqueInput } from "./RestaurantWhereUniqueInput";
import { RestaurantUpdateInput } from "./RestaurantUpdateInput";
import { PanierMystereFindManyArgs } from "../../panierMystere/base/PanierMystereFindManyArgs";
import { PanierMystere } from "../../panierMystere/base/PanierMystere";
import { PanierMystereWhereUniqueInput } from "../../panierMystere/base/PanierMystereWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RestaurantControllerBase {
  constructor(
    protected readonly service: RestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Restaurant })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRestaurant(
    @common.Body() data: RestaurantCreateInput
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      data: data,
      select: {
        adresse: true,
        coordonnEsGps: true,
        createdAt: true,
        id: true,
        nom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Restaurant] })
  @ApiNestedQuery(RestaurantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurants(@common.Req() request: Request): Promise<Restaurant[]> {
    const args = plainToClass(RestaurantFindManyArgs, request.query);
    return this.service.restaurants({
      ...args,
      select: {
        adresse: true,
        coordonnEsGps: true,
        createdAt: true,
        id: true,
        nom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant({
      where: params,
      select: {
        adresse: true,
        coordonnEsGps: true,
        createdAt: true,
        id: true,
        nom: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() data: RestaurantUpdateInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        where: params,
        data: data,
        select: {
          adresse: true,
          coordonnEsGps: true,
          createdAt: true,
          id: true,
          nom: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Restaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRestaurant(
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant({
        where: params,
        select: {
          adresse: true,
          coordonnEsGps: true,
          createdAt: true,
          id: true,
          nom: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/panierMysteres")
  @ApiNestedQuery(PanierMystereFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PanierMystere",
    action: "read",
    possession: "any",
  })
  async findPanierMysteres(
    @common.Req() request: Request,
    @common.Param() params: RestaurantWhereUniqueInput
  ): Promise<PanierMystere[]> {
    const query = plainToClass(PanierMystereFindManyArgs, request.query);
    const results = await this.service.findPanierMysteres(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        nom: true,
        prix: true,

        restaurant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async connectPanierMysteres(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        connect: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async updatePanierMysteres(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        set: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "update",
    possession: "any",
  })
  async disconnectPanierMysteres(
    @common.Param() params: RestaurantWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        disconnect: body,
      },
    };
    await this.service.updateRestaurant({
      where: params,
      data,
      select: { id: true },
    });
  }
}