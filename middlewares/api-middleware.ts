import ProjectStore from '../store/projects.json';
import BookStore from '../store/books.json';
import ChapterStore from '../store/chapters.json';
import ElementalStore from '../store/elementals.json';

import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.json(ProjectStore);
});

app.get('/project/:id', (req, res) => {
    const project = ProjectStore.find(project => project.id === req.params.id);
    res.json({ data: project });
});

app.get('/:id/books', (req, res) => {
    const { type } = req.query;
    const projectId = req.params.id;
    const projects = BookStore.filter(book => book.projectID === projectId);

    if (type && type === 'count')
        res.json({ count: projects.length });
    else
        res.json({ data: projects });
});

app.get('/:id/chapters', async (req, res) => {
    const { type } = req.query;
    const bookID = req.params.id;
    const chapters = ChapterStore.filter(chapter => chapter.bookID === bookID);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (type && type === 'count')
        res.json({ count: chapters.length });
    else
        res.json({ data: chapters });
});

type ElementalJSON = {
    id: string;
    title: string;
    description: string;
    projectID: string;
    elementalID: string | null;
};

type Elemental = {
    id: string;
    title: string;
    description: string;
    projectID: string;
    elementals: Elemental[];
}

const structureElementals = (elementals: ElementalJSON[]): Elemental[] => {
    const elementalMap: { [key: string]: Elemental } = {};

    // Initialize the elemental map with basic structure
    elementals.forEach(elemental => {
        elementalMap[elemental.id] = {
            id: elemental.id,
            title: elemental.title,
            description: elemental.description,
            projectID: elemental.projectID,
            elementals: []
        };
    });

    // Populate the children and set the parent references
    elementals.forEach(elemental => {
        if (elemental.elementalID) {
            const parent = elementalMap[elemental.elementalID];
            const child = elementalMap[elemental.id];
            if (parent) {
                parent.elementals.push(child);
            }
        }
    });

    // Return the top-level elementals (those without a parent)
    return Object.values(elementalMap).filter(elemental => !elementals.find(e => e.id === elemental.id)?.elementalID);
};

app.get('/:id/elementals', (req, res) => {
    const { type, structure } = req.query;
    const projectID = req.params.id;
    const elementals = ElementalStore.filter(elemental => elemental.projectID === projectID);

    if (type && type === 'count')
        res.json({ count: elementals.length });
    else if (structure && structure === 'true')
        res.json({ data: structureElementals(elementals) });
    else
        res.json({ data: elementals });
});

const apiMiddleware = app;

export default apiMiddleware;