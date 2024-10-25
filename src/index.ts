import { Hono } from 'hono';
import { createPosts, getPosts } from './controller/posts';

export type Env = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/posts', getPosts);
app.post('/posts', createPosts);

export default app;
