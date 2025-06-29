import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not defined - using fallback");
    
    // Create a mock that matches the NeonQueryFunction type
    const mockSql = (async (strings: any, ...values: any[]) => {
      console.log("Mock database query:", strings, values);
      return [];
    }) as any;
    
    // Add all required properties to match Neon interface
    mockSql.transaction = async (callback: any) => {
      console.log("Mock transaction");
      return callback(mockSql);
    };
    
    // Add parameterizedQuery method
    mockSql.parameterizedQuery = async (query: string, params: any[]) => {
      console.log("Mock parameterized query:", query, params);
      return [];
    };
    
    return mockSql;
  }
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    return sql;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to database");
  }
}
