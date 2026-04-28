export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      attendance: {
        Row: {
          created_at: string
          id: number
          match_id: number
          player_id: number
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          match_id: number
          player_id: number
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          match_id?: number
          player_id?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "player_match_results"
            referencedColumns: ["match_id"]
          },
          {
            foreignKeyName: "attendance_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      latest_teams: {
        Row: {
          generated_at: string
          generation_type: string | null
          match_id: number
          team_red_player_ids: number[]
          team_white_player_ids: number[]
        }
        Insert: {
          generated_at?: string
          generation_type?: string | null
          match_id: number
          team_red_player_ids: number[]
          team_white_player_ids: number[]
        }
        Update: {
          generated_at?: string
          generation_type?: string | null
          match_id?: number
          team_red_player_ids?: number[]
          team_white_player_ids?: number[]
        }
        Relationships: [
          {
            foreignKeyName: "latest_teams_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: true
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "latest_teams_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: true
            referencedRelation: "player_match_results"
            referencedColumns: ["match_id"]
          },
        ]
      }
      match_lineups: {
        Row: {
          created_at: string
          match_id: number
          player_id: number
          team: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          match_id: number
          player_id: number
          team: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          match_id?: number
          player_id?: number
          team?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_lineups_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_lineups_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "player_match_results"
            referencedColumns: ["match_id"]
          },
          {
            foreignKeyName: "match_lineups_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          created_at: string
          date: string
          id: number
          location: string | null
          score_red: number | null
          score_white: number | null
          season: string | null
          team_generation: string | null
          ventiel_player_id: number | null
          voorbeschouwing: string | null
          zlatan_player_id: number | null
        }
        Insert: {
          created_at?: string
          date: string
          id?: number
          location?: string | null
          score_red?: number | null
          score_white?: number | null
          season?: string | null
          team_generation?: string | null
          ventiel_player_id?: number | null
          voorbeschouwing?: string | null
          zlatan_player_id?: number | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: number
          location?: string | null
          score_red?: number | null
          score_white?: number | null
          season?: string | null
          team_generation?: string | null
          ventiel_player_id?: number | null
          voorbeschouwing?: string | null
          zlatan_player_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_ventiel_player_id_fkey"
            columns: ["ventiel_player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_zlatan_player_id_fkey"
            columns: ["zlatan_player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          actief: boolean
          created_at: string
          id: number
          name: string
          position: string
        }
        Insert: {
          actief?: boolean
          created_at?: string
          id?: number
          name: string
          position: string
        }
        Update: {
          actief?: boolean
          created_at?: string
          id?: number
          name?: string
          position?: string
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          active: boolean
          created_at: string
          endpoint: string
          id: number
          keys_auth: string
          keys_p256dh: string
          last_seen_at: string | null
          player_id: number | null
          user_agent: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          endpoint: string
          id?: number
          keys_auth: string
          keys_p256dh: string
          last_seen_at?: string | null
          player_id?: number | null
          user_agent?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          endpoint?: string
          id?: number
          keys_auth?: string
          keys_p256dh?: string
          last_seen_at?: string | null
          player_id?: number | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "push_subscriptions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      reminder_log: {
        Row: {
          body: string | null
          expired_count: number | null
          id: number
          recipients_count: number | null
          sent_at: string
          succeeded_count: number | null
          title: string | null
          type: string
        }
        Insert: {
          body?: string | null
          expired_count?: number | null
          id?: number
          recipients_count?: number | null
          sent_at?: string
          succeeded_count?: number | null
          title?: string | null
          type: string
        }
        Update: {
          body?: string | null
          expired_count?: number | null
          id?: number
          recipients_count?: number | null
          sent_at?: string
          succeeded_count?: number | null
          title?: string | null
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      player_head_to_head: {
        Row: {
          a_wins: number | null
          b_wins: number | null
          player_a_id: number | null
          player_b_id: number | null
          ties: number | null
        }
        Relationships: [
          {
            foreignKeyName: "match_lineups_player_id_fkey"
            columns: ["player_a_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_lineups_player_id_fkey"
            columns: ["player_b_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      player_match_results: {
        Row: {
          date: string | null
          match_id: number | null
          player_id: number | null
          result: string | null
          season: string | null
          team: string | null
        }
        Relationships: [
          {
            foreignKeyName: "match_lineups_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
