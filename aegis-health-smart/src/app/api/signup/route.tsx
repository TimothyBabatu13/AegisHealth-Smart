import { userDetailsType } from "@/types/types";
import { CreateNewAccount } from "@/utils/firebase";
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
    
    const request : userDetailsType = await req.json();
    const { email, password } = request;
    const data : userDetailsType = { email, password }
    
    const result = await CreateNewAccount(data);

    return new Response(JSON.stringify({result: result.data, status: result.code}), {
        headers: {
          "Content-Type" : "application/json",
        },
        status: result.code
      })
}