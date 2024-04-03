import { NextResponse } from "next/server";
import { postCollection } from "../route";

export const GET = async () => {
  const res = await postCollection.find().toArray();
  return NextResponse.json(res);
};
