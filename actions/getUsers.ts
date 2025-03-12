import { users } from "@/prisma/generated/prisma-client-js";
import client from "@/prisma/prisma-client";

export const getUser = async () => {
    try {
        const result: users[] = await client.users.findMany()
        
        return {
            payload: result,
            hasError: false,
            errorMessage: "",
        }
    } catch (error) {

        if (error instanceof Error) {
            return {
                payload: [],
                hasError: true,
                errorMessage: error.message,
            }
        }

        return {
            payload: [],
            hasError: true,
            errorMessage: "An error occurred while fetching data",
        }

    }

}