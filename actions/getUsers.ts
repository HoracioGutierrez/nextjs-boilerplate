"use server";
import type { users } from "@/prisma/generated/prisma-client-js";
import client from "@/prisma/prisma-client";
import { executeAction } from "@/lib/actionWrapper";
import type { ActionResponse, Users } from "@/lib/types";
import { createSuccessResponse } from "@/lib/utils";

export const getUsers = async (): Promise<ActionResponse<Users>> => {
	return executeAction<Users>(async () => {
		const result: users[] = await client.users.findMany();
		return createSuccessResponse(result);
	}, "An error occurred while fetching users");
};
