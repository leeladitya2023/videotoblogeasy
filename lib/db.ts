import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not defined - using fallback");
    // Return a mock connection for development/testing
    const mockSql = async (strings: any, ...values: any[]) => {
      console.log("Mock database query:", strings, values);
      return [];
    };
    
    // Add required properties to match Neon interface
    mockSql.transaction = async (callback: any) => {
      console.log("Mock transaction");
      return callback(mockSql);
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
