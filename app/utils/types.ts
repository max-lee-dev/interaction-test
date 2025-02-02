export type College = {
  name: string;
  location: string;
  rank?: number;
  acceptanceRate?: number;
  tuition?: number;
  checked: boolean;
}

export type CollegeResponseObject = Record<string, boolean>