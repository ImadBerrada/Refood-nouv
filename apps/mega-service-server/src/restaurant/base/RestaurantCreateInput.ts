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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PanierMystereCreateNestedManyWithoutRestaurantsInput } from "./PanierMystereCreateNestedManyWithoutRestaurantsInput";
import { Type } from "class-transformer";

@InputType()
class RestaurantCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  adresse?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  coordonnEsGps?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom?: string | null;

  @ApiProperty({
    required: false,
    type: () => PanierMystereCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => PanierMystereCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => PanierMystereCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  panierMysteres?: PanierMystereCreateNestedManyWithoutRestaurantsInput;
}

export { RestaurantCreateInput as RestaurantCreateInput };
