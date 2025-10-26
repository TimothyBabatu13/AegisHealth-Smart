import { userDetailsType } from "@/types/types";
import { CreateNewAccount } from "@/utils/firebase";
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
    
    const request : userDetailsType = await req.json();
    const { email, password, isDoctor } = request;
    const data : userDetailsType = { email, password, isDoctor }
    
    const result = await CreateNewAccount(data);

    return new Response(JSON.stringify({result: result.data, status: result.code}), {
        headers: {
          "Content-Type" : "application/json",
        },
        status: result.code
      })
}