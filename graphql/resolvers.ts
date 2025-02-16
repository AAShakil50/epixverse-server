import Projects from '../store/projects.json';
import Books from '../store/books.json';
import Chapters from '../store/chapters.json';
import Scenes from '../store/scenes.json';
import Elementals from '../store/elementals.json';
import { Resolvers } from '../generated/resolvers-types';

const resolvers: Resolvers = {
  Query: {
    projects: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      return Projects.slice(offset, offset + limit);
    },

    project: async (_project, _args, _context, _info) => {
      return Projects.find((project) => project.id === _args.id) ?? null
    },

    books: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      return Books.slice(offset, offset + limit);
    },

    book: async (_parent: any, args: any) => {
      return Books.find((book) => book.id === args.id) ?? null;
    },

    chapters: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      return Chapters.slice(offset, offset + limit);
    },

    chapter: async (_parent: any, args: any) => {
      return Chapters.find((chapter) => chapter.id === args.id) ?? null;
    },

    scenes: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      return Scenes.slice(offset, offset + limit);
    },

    scene: async (_parent: any, args: any) => {
      return Scenes.find((scene) => scene.id === args.id) ?? null;
    },

    elementals: async (_parent: any, args: any) => {
      const { limit, offset, projectID } = args;
      let elementals = Elementals.slice(offset, offset + limit);
      if (projectID) elementals = elementals.filter((elemental) => elemental.projectID === projectID);
      return (elementals);
    },

    elemental: async (_parent: any, args: any) => {
      return Elementals.find((elemental) => elemental.id === args.id) ?? null;
    },

    epixverse: async () => {
      return {
        app: 'EpixVerse',
        version: Math.random().toString(36).substring(7),
        description: 'EpixVerse is a GraphQL API for a fictional writing app.',
        developer: ['Ashraful Alam Shakil', 'Nirob Ahmed'],
      };
    },
  },
  Project: {
    books: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      const books = Books.filter((book) => book.projectID === _parent.id);
      return books.slice(offset, offset + limit);
    },

    elementals: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      let elementals = Elementals.filter((elemental) => elemental.projectID === _parent.id);
      return (elementals.slice(offset, offset + limit));
    },
  },
  Book: {
    chapters: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      const chapters = Chapters.filter((chapter) => chapter.bookID === _parent.id)
      return chapters.slice(offset, offset + limit);
    },
  },
  Chapter: {
    scenes: async (_parent: any, args: any) => {
      const { limit, offset } = args;
      const scenes = Scenes.filter((scene) => scene.chapterID === _parent.id);
      return scenes.slice(offset, offset + limit);
    },
  },

  Mutation: {
    addProject: async (_parent: any, args: any) => {
      const { title, description } = args
      
      const newProject = {
        id: String(Projects.length),
        title,
        description        
      }

      Projects.push(newProject)
      return newProject
    }
  }
};

export default resolvers;