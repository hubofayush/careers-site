import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://hook.us2.make.com/7ciy1gsydo4b6gaakjfvc6umpk6ahvu1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Make webhook failed");
    }

    return NextResponse.json({
      success: true,
      message: "LinkedIn post triggered",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error triggering LinkedIn post" },
      { status: 500 }
    );
  }
}
