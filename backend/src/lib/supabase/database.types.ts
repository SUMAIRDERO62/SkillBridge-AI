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
          skills: string[];
          duration: string;
          difficulty: "Beginner" | "Intermediate" | "Advanced";
          future_demand: string;
          projects: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          skills: string[];
          duration: string;
          difficulty: "Beginner" | "Intermediate" | "Advanced";
          future_demand: string;
          projects: string;
        };
        Update: Partial<Database["public"]["Tables"]["careers"]["Insert"]>;
      };
      roadmap_steps: {
        Relationships: [];
        Row: {
          id: string;
          career_id: string;
          title: string;
          description: string;
          outcome: string;
          duration: string;
          difficulty: "Beginner" | "Intermediate" | "Advanced";
          icon: "code" | "layers" | "trending-up" | "target" | "brain" | "sparkles" | "rocket" | "briefcase";
          position: number;
        };
        Insert: {
          id?: string;
          career_id: string;
          title: string;
          description: string;
          outcome: string;
          duration: string;
          difficulty: "Beginner" | "Intermediate" | "Advanced";
          icon: "code" | "layers" | "trending-up" | "target" | "brain" | "sparkles" | "rocket" | "briefcase";
          position: number;
        };
        Update: Partial<Database["public"]["Tables"]["roadmap_steps"]["Insert"]>;
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
