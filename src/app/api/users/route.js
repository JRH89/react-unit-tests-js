import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json([
    {
      id: 1,
      username: 'jared',
    },
    {
      id: 2,
      username: 'steve',
    },
    {
      id: 3,
      username: 'kevin',
    },
  ]);
}