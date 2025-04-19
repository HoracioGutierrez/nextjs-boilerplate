import type { ActionResponse } from "./types";
import { createErrorResponse } from "./utils";

/**
 * A higher-order function that wraps server actions with standard error handling
 *
 * @param actionFn - The server action function to wrap
 * @param errorMessage - Optional custom error message for unexpected errors
 * @returns A wrapped function with standardized error handling
 */
export function withErrorHandling<T extends unknown[], R>(
	actionFn: (...args: T) => Promise<ActionResponse<R>>,
	errorMessage = "An unexpected error occurred",
): (...args: T) => Promise<ActionResponse<R>> {
	return async (...args: T): Promise<ActionResponse<R>> => {
		try {
			return await actionFn(...args);
		} catch (error) {
			if (error instanceof Error) {
				return createErrorResponse<R>(error.message);
			}
			return createErrorResponse<R>(errorMessage);
		}
	};
}

/**
 * A decorator-style function for more complex action handlers
 * that need custom error handling logic inside the action
 *
 * @param actionLogic - A function containing the core action logic
 * @param errorMessage - Optional custom error message for unexpected errors
 * @returns ActionResponse with standardized error handling
 */
export async function executeAction<R>(
	actionLogic: () => Promise<ActionResponse<R>>,
	errorMessage = "An unexpected error occurred",
): Promise<ActionResponse<R>> {
	try {
		return await actionLogic();
	} catch (error) {
		if (error instanceof Error) {
			return createErrorResponse<R>(error.message);
		}
		return createErrorResponse<R>(errorMessage);
	}
}
