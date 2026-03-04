// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
import { Subject } from "../types";

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Foundational concepts in computer science including algorithms, data structures, and programming paradigms.",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Advanced calculus covering integration techniques, sequences, series, and applications of integrals.",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics I: Mechanics",
    department: "Physics",
    description:
      "Fundamental principles of mechanics including kinematics, dynamics, energy, and conservation laws.",
    createdAt: "2024-01-15T10:00:00Z",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};
