export interface TaskProperties {
    Company: { title: { text: { content: string } }[] };
    Campaign: { rich_text: { text: { content: string } }[] };
    Description: { rich_text: { text: { content: string } }[] };
    PlannedDate: { date: { start: string } };
    Where: { rich_text: { text: { content: string } }[] };
    Language: { select: { name: string } };
    Content: { rich_text: { text: { content: string } }[] };
    ImageContent: { rich_text: [] };
    Image: { files: [] };
    
}