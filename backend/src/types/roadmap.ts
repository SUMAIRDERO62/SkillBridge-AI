export type RoadmapNode = {
  id: string;
  careerId: string;
  title: string;
  description: string;
  level: number;
  sortOrder: number;
  createdAt: string;
};

export type RoadmapEdge = {
  id: string;
  parentNode: string;
  childNode: string;
};

export type CareerRoadmap = {
  career: import("./career").Career;
  nodes: RoadmapNode[];
  edges: RoadmapEdge[];
};
