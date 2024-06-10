/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PanierMystereWhereUniqueInput } from "../../panierMystere/base/PanierMystereWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UtilisateurWhereUniqueInput } from "../../utilisateur/base/UtilisateurWhereUniqueInput";

@InputType()
class FavorisCreateInput {
  @ApiProperty({
    required: false,
    type: () => PanierMystereWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PanierMystereWhereUniqueInput)
  @IsOptional()
  @Field(() => PanierMystereWhereUniqueInput, {
    nullable: true,
  })
  panierMystere?: PanierMystereWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UtilisateurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurWhereUniqueInput)
  @IsOptional()
  @Field(() => UtilisateurWhereUniqueInput, {
    nullable: true,
  })
  utilisateur?: UtilisateurWhereUniqueInput | null;
}

export { FavorisCreateInput as FavorisCreateInput };
