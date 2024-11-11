import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const filter = {
    database_id: '1290d303ccf9808d8697f7a3dc42ef3f',
    filter: {
        property: 'ID',
        number: {
            equals: 270,
        },
    },
};
const getTaskById = async () => {
    try {
        const tasks = await notion.databases.query(filter);
        console.log('Tarefa encontrada:', JSON.stringify(tasks.results[0], null, 2));
    }
    catch (error) {
        console.error('Erro ao buscar tarefa:', error);
    }
};
//getTaskById();
const filterUpdate = {
    database_id: '1290d303ccf9808d8697f7a3dc42ef3f',
    filter: {
        property: 'ID', // Nome da coluna na tabela
        number: {
            equals: 270,
        },
    },
};
const updateTaskById = async () => {
    try {
        // Passo 1: Buscar o page_id com base na coluna "ID"
        const tasks = await notion.databases.query(filterUpdate);
        if (tasks.results.length === 0) {
            console.error('Nenhuma tarefa encontrada com o ID especificado.');
            return;
        }
        const pageId = tasks.results[0].id; // Pegando o page_id da primeira tarefa encontrada
        // Passo 2: Atualizar a tarefa usando o page_id
        const response = await notion.pages.update({
            page_id: pageId,
            properties: {
                Description: {
                    rich_text: [
                        {
                            text: {
                                content: "atualizando descrição",
                            },
                        },
                    ],
                },
            },
        });
        console.log('Tarefa atualizada:', JSON.stringify(response, null, 2));
    }
    catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
    }
};
//updateTaskById();
const filterDelete = {
    database_id: '1290d303ccf9808d8697f7a3dc42ef3f',
    filter: {
        property: 'ID', // Nome da coluna na tabela
        number: {
            equals: 270,
        },
    },
};
const deleteTaskById = async () => {
    try {
        // Passo 1: Buscar o page_id com base na coluna "ID"
        const tasks = await notion.databases.query(filterDelete);
        if (tasks.results.length === 0) {
            console.error('Nenhuma tarefa encontrada com o ID especificado.');
            return;
        }
        const pageId = tasks.results[0].id; // Pegando o page_id da primeira tarefa encontrada
        // Passo 2: Arquivar a tarefa usando o page_id
        const response = await notion.pages.update({
            page_id: pageId,
            archived: true, // Define o item como arquivado
        });
        console.log('Tarefa arquivada:', JSON.stringify(response, null, 2));
    }
    catch (error) {
        console.error('Erro ao arquivar tarefa:', error);
    }
};
deleteTaskById();
const createPage = async () => {
    try {
        const response = await notion.pages.create({
            parent: { database_id: '1290d303ccf9808d8697f7a3dc42ef3f' },
            properties: {
                Company: {
                    title: [
                        {
                            text: {
                                content: "Company Jhuan",
                            },
                        },
                    ],
                },
                Content: {
                    rich_text: [
                        {
                            text: {
                                content: "content Jhuan",
                            },
                        },
                    ],
                },
                Language: {
                    select: {
                        name: "Brazilian Portuguese",
                    },
                },
                "image content": {
                    rich_text: [],
                },
                Image: {
                    files: [],
                },
                Description: {
                    rich_text: [
                        {
                            text: {
                                content: "Teste de descrição",
                            },
                        },
                    ],
                },
                Campaign: {
                    rich_text: [
                        {
                            text: {
                                content: "Teste de campanha",
                            },
                        },
                    ],
                },
                Where: {
                    rich_text: [
                        {
                            text: {
                                content: "Teste de onde",
                            },
                        },
                    ],
                },
                PlannedDate: {
                    date: {
                        start: "2024-11-11",
                    },
                },
            },
        });
        console.log('Nova página criada:', response);
    }
    catch (error) {
        console.error('Erro ao criar página:', error);
    }
};
//createPage();
