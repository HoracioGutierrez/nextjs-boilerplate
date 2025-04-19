import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ActionResponse } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Creates a successful response for server actions
 */
export function createSuccessResponse<T>(data: T): ActionResponse<T> {
	return {
		data,
		hasError: false,
		errorMessage: "",
		status: "success",
		statusCode: 200,
	};
}

/**
 * Creates an error response for server actions
 */
export function createErrorResponse<T>(
	message = "An unexpected error occurred",
	statusCode = 500,
): ActionResponse<T> {
	return {
		data: null,
		hasError: true,
		errorMessage: message,
		status: "error",
		statusCode,
	};
}

/**
 * Creates a validation error response
 */
export function createValidationErrorResponse<T>(
	message = "Validation failed",
): ActionResponse<T> {
	return createErrorResponse<T>(message, 400);
}
