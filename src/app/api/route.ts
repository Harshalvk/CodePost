import { db } from "@/db";

export const GET = async () => {
  try {
    const data = await db.blog.findMany({
      take: 10,
      select: { title: true, category: true, slug: true },
      orderBy: [{ view_count: "desc" }],
    });

    return Response.json(data);
  } catch (error: any) {
    console.error("🚨Database Error\n", error.message);
    throw new Error("Failed to fetch the popular posts");
  }
};

export const POST = async (request: Request) => {
  const { slug, title, category } = await request.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: {
        slug: slug,
      },
    });

    if (existingPost) {
      await db.blog.update({
        where: {
          slug: slug,
        },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      await db.blog.create({
        data: {
          slug: slug,
          title: title,
          category: category,
        },
      });
    }
  } catch (error) {
    console.error("🚨Error updating page view count \n", error);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
};
