import { promises as fs } from 'fs';
import path from 'path';
import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private filePath = path.join(ROOT_DIR, 'data', 'posts.json');

  private async readFromDisk(): Promise<PostModel[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      const posts = JSON.parse(data) as PostModel[];
      return posts;
    } catch (error) {
      console.error('❌ Erro ao ler o arquivo de posts:', error);
      return []; // Retorna lista vazia para evitar falhas
    }
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
}

export const postRepository = new JsonPostRepository();

console.log(ROOT_DIR);
