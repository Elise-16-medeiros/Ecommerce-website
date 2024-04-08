import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function createCollection(req: NextRequest, res: NextResponse) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 400,
        },
      );
    }

    const { title, description, image } = req.body;

    const existingCollection = await prisma.collection.findUnique({
      where: { title },
    });

    if (existingCollection) {
      return NextResponse.json(
        {
          message: "Collection already exists",
        },
        {
          status: 400,
        },
      );
    }

    if (!title || !image) {
      return NextResponse.json(
        {
          message: "Title and image are required",
        },
        {
          status: 400,
        },
      );
    }

    const newCollection = await prisma.collection.create({
      data: {
        title,
        description,
        image,
      },
    });

    return NextResponse.json(
      {
        message: newCollection,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.log("[collections_POST]", err);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}

export async function getCollections(req: NextRequest, res: NextResponse) {
  try {
    const collections = await prisma.collection.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message: collections,
      },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.log("[collections_GET]", err);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
