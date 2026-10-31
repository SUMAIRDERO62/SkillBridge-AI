export type Database = {
  public: {
    Tables: {
      careers: {
        Relationships: [];
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          icon: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          icon?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["careers"]["Insert"]>;
      };
      roadmap_nodes: {
        Relationships: [];
        Row: {
          id: string;
          career_id: string;
          title: string;
          description: string;
          level: number;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          career_id: string;
          title: string;
          description: string;
          level?: number;
          sort_order?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["roadmap_nodes"]["Insert"]>;
      };
      roadmap_edges: {
        Relationships: [];
        Row: {
          id: string;
          parent_node: string;
          child_node: string;
        };
        Insert: {
          id?: string;
          parent_node: string;
          child_node: string;
        };
        Update: Partial<Database["public"]["Tables"]["roadmap_edges"]["Insert"]>;
      };
      progress: {
        Relationships: [];
        Row: {
          id: string;
          user_id: string;
          career_id: string;
          step_id: string;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          career_id: string;
          step_id: string;
          completed: boolean;
          completed_at: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["progress"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
