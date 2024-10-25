import { drizzle } from 'drizzle-orm/d1';
import { Context } from 'hono';
import { posts } from '../db/schema';

export async function getPosts(c: Context) {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(posts).all();
  return c.json(result);
}

export async function createPosts(c: Context) {
  const db = drizzle(c.env.DB);
  const { title, content } = await c.req.json();
  const result = await db.insert(posts).values({ title, content }).returning();
  return c.json(result);
}
