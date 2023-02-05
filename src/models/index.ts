export interface Meal {
  id: string;
  name: string;
  createdAt: string;
  image: string;
}

export interface ColumnModel {
  id: string;
  description: string;
  tags: string[];
  image: string;
  createdAt: string;
}

export interface ExerciseModel {
  id: string;
  time: string | number;
  value: string | number;
  label: string;
}
