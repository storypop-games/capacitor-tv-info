export interface TvInfoPlugin {
  isTv(): Promise<{ value: boolean }>;
}
