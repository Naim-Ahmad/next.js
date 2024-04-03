import { NextResponse } from "next/server";
import { postCollection } from "../../route";

export const GET = async (req, { params }) => {
  const res = await postCollection.findOne({ id: parseInt(params.id) });
  return NextResponse.json(res);
};
