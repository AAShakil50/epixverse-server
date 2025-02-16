import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  chapters?: Maybe<Array<Chapter>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};


export type BookChaptersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Chapter = {
  __typename?: 'Chapter';
  id: Scalars['ID']['output'];
  scenes?: Maybe<Array<Scene>>;
  title: Scalars['String']['output'];
};


export type ChapterScenesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Elemental = {
  __typename?: 'Elemental';
  description?: Maybe<Scalars['String']['output']>;
  elemental?: Maybe<Elemental>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type EpixVerse = {
  __typename?: 'EpixVerse';
  app: Scalars['String']['output'];
  description: Scalars['String']['output'];
  developer?: Maybe<Array<Scalars['String']['output']>>;
  version: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject: Project;
  editProject: Project;
};


export type MutationAddProjectArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationEditProjectArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Project = {
  __typename?: 'Project';
  books?: Maybe<Array<Book>>;
  description?: Maybe<Scalars['String']['output']>;
  elementals?: Maybe<Array<Elemental>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};


export type ProjectBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectElementalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Book>;
  chapter?: Maybe<Chapter>;
  chapters: Array<Chapter>;
  elemental?: Maybe<Elemental>;
  elementals: Array<Elemental>;
  epixverse: EpixVerse;
  project?: Maybe<Project>;
  projects: Array<Project>;
  scene?: Maybe<Scene>;
  scenes: Array<Scene>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChapterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChaptersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryElementalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryElementalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  projectID?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySceneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryScenesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Scene = {
  __typename?: 'Scene';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Chapter: ResolverTypeWrapper<Chapter>;
  Elemental: ResolverTypeWrapper<Elemental>;
  EpixVerse: ResolverTypeWrapper<EpixVerse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Scene: ResolverTypeWrapper<Scene>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Book: Book;
  Boolean: Scalars['Boolean']['output'];
  Chapter: Chapter;
  Elemental: Elemental;
  EpixVerse: EpixVerse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Project: Project;
  Query: {};
  Scene: Scene;
  String: Scalars['String']['output'];
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType, RequireFields<BookChaptersArgs, 'limit' | 'offset'>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scenes?: Resolver<Maybe<Array<ResolversTypes['Scene']>>, ParentType, ContextType, RequireFields<ChapterScenesArgs, 'limit' | 'offset'>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElementalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Elemental'] = ResolversParentTypes['Elemental']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elemental?: Resolver<Maybe<ResolversTypes['Elemental']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EpixVerseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpixVerse'] = ResolversParentTypes['EpixVerse']> = ResolversObject<{
  app?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  developer?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'title'>>;
  editProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationEditProjectArgs, 'id'>>;
}>;

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  books?: Resolver<Maybe<Array<ResolversTypes['Book']>>, ParentType, ContextType, RequireFields<ProjectBooksArgs, 'limit' | 'offset'>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elementals?: Resolver<Maybe<Array<ResolversTypes['Elemental']>>, ParentType, ContextType, RequireFields<ProjectElementalsArgs, 'limit' | 'offset'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBooksArgs, 'limit' | 'offset'>>;
  chapter?: Resolver<Maybe<ResolversTypes['Chapter']>, ParentType, ContextType, RequireFields<QueryChapterArgs, 'id'>>;
  chapters?: Resolver<Array<ResolversTypes['Chapter']>, ParentType, ContextType, RequireFields<QueryChaptersArgs, 'limit' | 'offset'>>;
  elemental?: Resolver<Maybe<ResolversTypes['Elemental']>, ParentType, ContextType, RequireFields<QueryElementalArgs, 'id'>>;
  elementals?: Resolver<Array<ResolversTypes['Elemental']>, ParentType, ContextType, RequireFields<QueryElementalsArgs, 'limit' | 'offset' | 'projectID'>>;
  epixverse?: Resolver<ResolversTypes['EpixVerse'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectsArgs, 'limit' | 'offset'>>;
  scene?: Resolver<Maybe<ResolversTypes['Scene']>, ParentType, ContextType, RequireFields<QuerySceneArgs, 'id'>>;
  scenes?: Resolver<Array<ResolversTypes['Scene']>, ParentType, ContextType, RequireFields<QueryScenesArgs, 'limit' | 'offset'>>;
}>;

export type SceneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scene'] = ResolversParentTypes['Scene']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  Chapter?: ChapterResolvers<ContextType>;
  Elemental?: ElementalResolvers<ContextType>;
  EpixVerse?: EpixVerseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Scene?: SceneResolvers<ContextType>;
}>;

