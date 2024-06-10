/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FavorisWhereUniqueInput } from "../../favoris/base/FavorisWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FavorisUpdateManyWithoutPanierMysteresInput {
  @Field(() => [FavorisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavorisWhereUniqueInput],
  })
  connect?: Array<FavorisWhereUniqueInput>;

  @Field(() => [FavorisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavorisWhereUniqueInput],
  })
  disconnect?: Array<FavorisWhereUniqueInput>;

  @Field(() => [FavorisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavorisWhereUniqueInput],
  })
  set?: Array<FavorisWhereUniqueInput>;
}

export { FavorisUpdateManyWithoutPanierMysteresInput as FavorisUpdateManyWithoutPanierMysteresInput };