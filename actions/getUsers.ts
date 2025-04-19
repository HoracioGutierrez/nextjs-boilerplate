"use server";
import type { users } from "@/prisma/generated/prisma-client-js";
import client from "@/prisma/prisma-client";
import type { ActionResponse, Users } from "@/lib/types";
import { createErrorResponse, createSuccessResponse } from "@/lib/utils";

export const getUsers = async (): Promise<ActionResponse<Users>> => {
	try {
		const result: users[] = await client.users.findMany();
		return createSuccessResponse(result);
	} catch (error) {
		if (error instanceof Error) {
			return createErrorResponse<Users>(error.message);
		}
		return createErrorResponse<Users>("An error occurred while fetching data");
	}
};
