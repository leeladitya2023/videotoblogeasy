import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Simplified payments route - webhook functionality removed
  return NextResponse.json({
    status: "success",
    message: "Payment processing simplified - webhook functionality removed"
  });
}
