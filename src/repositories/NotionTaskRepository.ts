import { notion, databaseId } from '../config/notion.js';

export class NotionTaskRepository {
  async findTaskById(id: number): Promise<any> {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: 'ID', number: { equals: id } },
    });
    return response.results[0];
  }

  async updateTask(pageId: string, properties: Record<string, any>): Promise<any> {
    return await notion.pages.update({ page_id: pageId, properties });
  }

  async archiveTask(pageId: string): Promise<any> {
    return await notion.pages.update({ page_id: pageId, archived: true });
  }

  async createTask(properties: Record<string, any>): Promise<any> {
    return await notion.pages.create({
      parent: { database_id: databaseId },
      properties,
    });
  }
}
