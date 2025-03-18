import Projects from "../store/projects.json";
import Books from "../store/books.json";
import Chapters from "../store/chapters.json";
import Scenes from "../store/scenes.json";
import Elementals from "../store/elementals.json";
import { Resolvers } from "../generated/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    projects: async (_parent, _args) => {
      const { limit, offset } = _args;
      return Projects.slice(offset, offset + limit);
    },

    project: async (_project, _args) => {
      return Projects.find((project) => project.id === _args.id) ?? null;
    },

    books: async (_parent, _args) => {
      const { limit, offset } = _args;
      return Books.slice(offset, offset + limit);
    },

    book: async (_parent, _args) => {
      return Books.find((book) => book.id === _args.id) ?? null;
    },

    chapters: async (_parent, _args) => {
      const { limit, offset } = _args;
      return Chapters.slice(offset, offset + limit);
    },

    chapter: async (_parent, _args) => {
      return Chapters.find((chapter) => chapter.id === _args.id) ?? null;
    },

    scenes: async (_parent, _args) => {
      const { limit, offset } = _args;
      return Scenes.slice(offset, offset + limit);
    },

    scene: async (_parent, _args) => {
      return Scenes.find((scene) => scene.id === _args.id) ?? null;
    },

    elementals: async (_parent, _args) => {
      const { limit, offset, projectID } = _args;
      let elementals = Elementals.slice(offset, offset + limit);
      if (projectID)
        elementals = elementals.filter(
          (elemental) => elemental.projectID === projectID
        );
      return elementals;
    },

    elemental: async (_parent, _args) => {
      return Elementals.find((elemental) => elemental.id === _args.id) ?? null;
    },

    epixverse: async () => {
      return {
        app: "EpixVerse",
        version: Math.random().toString(36).substring(7),
        description: "EpixVerse is a GraphQL API for a fictional writing app.",
        developer: ["Ashraful Alam Shakil", "Nirob Ahmed"],
      };
    },
  },
  Project: {
    books: async (_parent, _args) => {
      const { limit, offset } = _args;
      const books = Books.filter((book) => book.projectID === _parent.id);
      return books.slice(offset, offset + limit);
    },

    elementals: async (_parent, _args) => {
      const { limit, offset } = _args;
      let elementals = Elementals.filter(
        (elemental) => elemental.projectID === _parent.id
      );
      return elementals.slice(offset, offset + limit);
    },
  },
  Book: {
    chapters: async (_parent, _args) => {
      const { limit, offset } = _args;
      const chapters = Chapters.filter(
        (chapter) => chapter.bookID === _parent.id
      );
      return chapters.slice(offset, offset + limit);
    },
  },
  Chapter: {
    scenes: async (_parent, _args) => {
      const { limit, offset } = _args;
      const scenes = Scenes.filter((scene) => scene.chapterID === _parent.id);
      return scenes.slice(offset, offset + limit);
    },
  },

  Mutation: {
    addProject: async (_parent, _args) => {
      const { title, description } = _args;

      const newProject = {
        id: String(Projects.length),
        title,
        description: description ?? "",
      };

      Projects.push(newProject);
      return newProject;
    },
  },
};

export default resolvers;
