import { DrizzlePostRepository } from './drizzle-post-repository';
import { PostRepository } from './post-repository';
export * from './post-repository';
export * from './json-post-repository';

export const postRepository: PostRepository = new DrizzlePostRepository();
