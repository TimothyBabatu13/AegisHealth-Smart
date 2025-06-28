import { NextResponse } from "next/server"
import json from '@/json/full_exercise_database.json'
export const GET = () => {
    const data = json;
    const first10 = data.filter((_item, index) => index < 10);
    return NextResponse.json(first10)
}