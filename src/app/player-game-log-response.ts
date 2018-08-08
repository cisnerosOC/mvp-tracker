export interface Game {
  id: string;
  created_at: Date;
  updated_at: Date;
  at_neutral_site?: any;
  attendance: number;
  away_team_outcome: string;
  away_team_score: number;
  broadcast: string;
  clock: string;
  clock_secs: number;
  daytime: boolean;
  duration: number;
  ended_at: Date;
  home_team_outcome: string;
  home_team_score: number;
  humidity?: any;
  interval: string;
  interval_number: number;
  interval_type: string;
  label: string;
  name: string;
  on: string;
  period: number;
  period_label: string;
  score: string;
  score_differential: number;
  scoreline: string;
  slug: string;
  started_at: Date;
  status: string;
  internet_coverage?: any;
  satellite_coverage?: any;
  television_coverage: string;
  temperature?: any;
  temperature_unit?: any;
  timestamp: number;
  title: string;
  weather_conditions?: any;
  wind_direction?: any;
  wind_speed?: any;
  wind_speed_unit?: any;
  home_team_id: string;
  away_team_id: string;
  winning_team_id: string;
  season_id: string;
  venue_id: string;
  official_ids: string[];
}

export interface HomeTeam {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  color: string;
  colors: string[];
  hashtag: string;
  hashtags: string[];
  location: string;
  name: string;
  nickname: string;
  latitude: number;
  longitude: number;
  slug: string;
  division_id: string;
  league_id: string;
}

export interface League {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  color?: any;
  minutes_per_period: number;
  name: string;
  periods: number;
  slug: string;
  sport: string;
}




export interface Season {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  current_interval_type: string;
  starts_on: string;
  ends_on: string;
  stats_coverage: string;
  slug: string;
  league_id: string;
}

export interface Venue {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  capacity: number;
  city: string;
  country: string;
  field_type: string;
  name: string;
  slug: string;
  state: string;
  stadium_type?: any;
  time_zone: string;
  latitude?: number;
  longitude?: number;
  league_id: string;
  season_id: string;
}

export interface Official {
  id: string;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  name: string;
  role: string;
  role_label: string;
  slug: string;
  uniform_number: string;
  league_id: string;
}

export interface Player {
  id: string;
  created_at: Date;
  updated_at: Date;
  active: boolean;
  bats: string;
  birth_date: string;
  captain?: any;
  city: string;
  country: string;
  draft_overall_pick: number;
  draft_round: number;
  draft_season: string;
  draft_team_name?: any;
  first_name: string;
  handedness: string;
  height: number;
  high_school: string;
  humanized_salary: string;
  last_name: string;
  mlbam_id: number;
  name: string;
  nickname: string;
  position_abbreviation: string;
  position_name: string;
  pro_debut: string;
  salary: number;
  salary_currency: string;
  school?: any;
  slug: string;
  sport: string;
  state: string;
  uniform_number: string;
  unit_of_height: string;
  unit_of_weight: string;
  weight: number;
  years_of_experience: number;
  league_id: string;
  playing_position_id: string;
  team_id: string;
}

export interface Team {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  color: string;
  colors: string[];
  hashtag: string;
  hashtags: string[];
  location: string;
  name: string;
  nickname: string;
  latitude: number;
  longitude: number;
  slug: string;
  division_id: string;
  league_id: string;
}

export interface Opponent {
  id: string;
  created_at: Date;
  updated_at: Date;
  abbreviation: string;
  color: string;
  colors: string[];
  hashtag: string;
  hashtags: string[];
  location: string;
  name: string;
  nickname: string;
  latitude: number;
  longitude: number;
  slug: string;
  division_id: string;
  league_id: string;
}

export interface GameLog {
  id: string;
  created_at: Date;
  updated_at: Date;
  game_played: boolean;
  game_started: boolean;
  game_finished: boolean;
  home_team_outcome: string;
  home_team_score: number;
  away_team_outcome: string;
  away_team_score: number;
  team_outcome: string;
  team_score: number;
  opponent_outcome: string;
  opponent_score: number;
  is_home_team: boolean;
  is_away_team: boolean;
  catcher_interferences: number;
  catcher_stealers_allowed: number;
  catcher_stealers_caught: number;
  extra_base_hits: number;
  fielding_errors?: number;
  outfield_assists?: number;
  passed_balls?: number;
  at_bats: number;
  batting_average: number;
  caught_stealing: number;
  doubles: number;
  grounded_into_double_plays: number;
  hit_by_pitch: number;
  hits: number;
  home_runs: number;
  innings_pitched?: any;
  intentional_walks: number;
  intentional_walks_against: number;
  left_on_base: number;
  on_base_percentage: number;
  on_base_plus_slugging: number;
  rlisp_two_out: number;
  runs: number;
  runs_batted_in: number;
  sacrifice_flys: number;
  sacrifice_hits: number;
  singles: number;
  slugging_percentage: number;
  stolen_bases: number;
  strikeouts: number;
  total_bases: number;
  triples: number;
  two_out_rbi: number;
  walks: number;
  balks?: any;
  balls_thrown?: any;
  batters_faced?: any;
  blown_saves?: any;
  complete_games?: any;
  earned_run_average?: any;
  pitcher_fielding_errors?: any;
  fly_ball_outs?: any;
  ground_ball_outs?: any;
  holds?: any;
  inherited_runners: number;
  inherited_runners_scored: number;
  inherited_runner_scoring_percentage: number;
  losses?: any;
  no_decisions: number;
  outs_pitched?: any;
  pickoffs: number;
  pitcher_caught_stealing: number;
  pitcher_earned_runs: number;
  pitcher_games_played: number;
  pitcher_games_started: number;
  pitcher_hit_by_pitch?: any;
  pitcher_hits?: any;
  pitcher_home_runs: number;
  pitcher_intentional_walks?: any;
  pitcher_runs?: any;
  pitcher_sacrifice_flys?: any;
  pitcher_sacrifice_hits?: any;
  pitcher_stolen_bases: number;
  pitcher_strikeouts?: any;
  pitcher_walks?: any;
  pitches_thrown?: any;
  quality_starts?: any;
  saves?: any;
  shutouts?: any;
  starting_pitches_thrown: number;
  strikes_thrown?: any;
  strike_percentage?: any;
  whip?: any;
  wild_pitches?: any;
  wins?: any;
  game_id: string;
  player_id: string;
  team_id: string;
  opponent_id: string;
}

export interface PlayerGameLogResponse {
  games: Game[];
  home_teams: Team[];
  leagues: League[];
  away_teams: Team[];
  winning_teams: Team[];
  seasons: Season[];
  venues: Venue[];
  officials: Official[];
  players: Player[];
  teams: Team[];
  opponents: Opponent[];
  game_logs: GameLog[];
}

