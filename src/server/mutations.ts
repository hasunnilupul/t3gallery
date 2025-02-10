import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import "server-only";

import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import analyticsServerClient from "~/server/analytics";

export const deleteImage = async (id: number) => {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete_image",
    properties: {
      imageId: id,
    },
  });

  redirect("/");
};
