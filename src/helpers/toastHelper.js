import { toast } from "react-toastify";

export function success(message) {
	toast.success(message, {
		className:
			"bg-input-bg-light text-text-light dark:text-text-dark dark:bg-input-bg-dark rounded-primary",
		bodyClassName: "text-sm font-medium",
		progressClassName: "bg-green-500",
	});
}

export function error(message) {
	toast.error(message, {
		className:
			"bg-input-bg-light text-text-light dark:text-text-dark dark:bg-input-bg-dark rounded-primary",
		bodyClassName: "text-sm font-medium",
		progressClassName: "bg-error",
	});
}
