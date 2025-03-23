import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

interface ServiceData {
  metadata: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  content: string;
  slug: string;
}

class Service<TData extends ServiceData> {
  constructor(private directory: string) {}

  get(slug: string): TData | undefined {
    const filePath = path.join(this.directory, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf8');
      return this.parse(source, slug);
    }
    return undefined;
  }

  getMany(): TData[] {
    return (
      this.getList()
        .map((slug) => {
          const entry = this.get(slug);
          if (entry) {
            return { ...entry, slug };
          }
          return undefined;
        })
        .filter((entry) => entry !== undefined && entry.metadata) as TData[]
    ).sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    );
  }

  getList(): string[] {
    try {
      return fs
        .readdirSync(this.directory)
        .filter((filename) => filename.endsWith('.mdx'))
        .map((filename) => filename.replace(/\.mdx$/, ''));
    } catch {
      return [];
    }
  }

  private parse(source: string, slug: string): TData {
    const parsed = matter(source);
    return {
      metadata: parsed.data,
      content: parsed.content,
      slug,
    } as TData;
  }
}

export default Service;
