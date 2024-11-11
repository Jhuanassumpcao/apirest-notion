import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';

dotenv.config();

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
export const databaseId = '1290d303ccf9808d8697f7a3dc42ef3f';
