import { notion, databaseId } from '../config/notion.js';

export class NotionTaskRepository {
  async findTaskById(id: number): Promise<any> {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: 'ID', number: { equals: id } },
    });
    return response.results[0];
  }
}
