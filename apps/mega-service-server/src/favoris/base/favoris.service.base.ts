/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Favoris as PrismaFavoris,
  PanierMystere as PrismaPanierMystere,
  Utilisateur as PrismaUtilisateur,
} from "@prisma/client";

export class FavorisServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FavorisCountArgs, "select">): Promise<number> {
    return this.prisma.favoris.count(args);
  }

  async favorises<T extends Prisma.FavorisFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavorisFindManyArgs>
  ): Promise<PrismaFavoris[]> {
    return this.prisma.favoris.findMany<Prisma.FavorisFindManyArgs>(args);
  }
  async favoris<T extends Prisma.FavorisFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavorisFindUniqueArgs>
  ): Promise<PrismaFavoris | null> {
    return this.prisma.favoris.findUnique(args);
  }
  async createFavoris<T extends Prisma.FavorisCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavorisCreateArgs>
  ): Promise<PrismaFavoris> {
    return this.prisma.favoris.create<T>(args);
  }
  async updateFavoris<T extends Prisma.FavorisUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavorisUpdateArgs>
  ): Promise<PrismaFavoris> {
    return this.prisma.favoris.update<T>(args);
  }
  async deleteFavoris<T extends Prisma.FavorisDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavorisDeleteArgs>
  ): Promise<PrismaFavoris> {
    return this.prisma.favoris.delete(args);
  }

  async getPanierMystere(
    parentId: string
  ): Promise<PrismaPanierMystere | null> {
    return this.prisma.favoris
      .findUnique({
        where: { id: parentId },
      })
      .panierMystere();
  }

  async getUtilisateur(parentId: string): Promise<PrismaUtilisateur | null> {
    return this.prisma.favoris
      .findUnique({
        where: { id: parentId },
      })
      .utilisateur();
  }
}