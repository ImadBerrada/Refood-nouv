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
import { PaiementService } from "../paiement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaiementCreateInput } from "./PaiementCreateInput";
import { Paiement } from "./Paiement";
import { PaiementFindManyArgs } from "./PaiementFindManyArgs";
import { PaiementWhereUniqueInput } from "./PaiementWhereUniqueInput";
import { PaiementUpdateInput } from "./PaiementUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaiementControllerBase {
  constructor(
    protected readonly service: PaiementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Paiement })
  @nestAccessControl.UseRoles({
    resource: "Paiement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaiement(
    @common.Body() data: PaiementCreateInput
  ): Promise<Paiement> {
    return await this.service.createPaiement({
      data: data,
      select: {
        createdAt: true,
        id: true,
        montant: true,
        mThode: true,
        statut: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Paiement] })
  @ApiNestedQuery(PaiementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Paiement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paiements(@common.Req() request: Request): Promise<Paiement[]> {
    const args = plainToClass(PaiementFindManyArgs, request.query);
    return this.service.paiements({
      ...args,
      select: {
        createdAt: true,
        id: true,
        montant: true,
        mThode: true,
        statut: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Paiement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Paiement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paiement(
    @common.Param() params: PaiementWhereUniqueInput
  ): Promise<Paiement | null> {
    const result = await this.service.paiement({
      where: params,
      select: {
        createdAt: true,
        id: true,
        montant: true,
        mThode: true,
        statut: true,
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
  @swagger.ApiOkResponse({ type: Paiement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Paiement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaiement(
    @common.Param() params: PaiementWhereUniqueInput,
    @common.Body() data: PaiementUpdateInput
  ): Promise<Paiement | null> {
    try {
      return await this.service.updatePaiement({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          montant: true,
          mThode: true,
          statut: true,
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
  @swagger.ApiOkResponse({ type: Paiement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Paiement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaiement(
    @common.Param() params: PaiementWhereUniqueInput
  ): Promise<Paiement | null> {
    try {
      return await this.service.deletePaiement({
        where: params,
        select: {
          createdAt: true,
          id: true,
          montant: true,
          mThode: true,
          statut: true,
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
}
