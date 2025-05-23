"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";
import Form from "next/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { handleEditAccountDetails } from "@/actions/handleEditAccountDetails";
import AccountModalButton from "./acount-modal-button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useI18n } from "@/locales/client";
import { LoadingButton } from "../ui/loading-button";

function AccountModal({ user }: { user: any }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const t = useI18n();

	const handleCloseModal = () => setIsModalOpen(false);

	const handleFormAction = async (formData: FormData) => {
		handleCloseModal();
		toast.promise(handleEditAccountDetails(formData), {
			loading: t("dashboard.account-modal.loading"),
			success: () => t("dashboard.account-modal.success"),
			error: () => t("dashboard.account-modal.error"),
		});
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="absolute -top-3 -right-3 group"
				>
					<Edit className="size-4-5-clamp text-muted-foreground/30 dark:text-muted group-hover:text-primary dark:group-hover:text-primary" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{t("dashboard.account-modal.title")}</DialogTitle>
					<DialogDescription>
						<span className="text-sm-base-clamp text-muted-foreground/30 dark:text-muted">
							{t("dashboard.account-modal.description")}
						</span>
					</DialogDescription>
				</DialogHeader>
				<Form action={handleFormAction} className="flex flex-col gap-4">
					<div className="flex gap-4 flex-col">
						<div className="flex flex-col gap-2">
							<Label htmlFor="email">
								{t("dashboard.account-modal.fields.email.label")}
							</Label>
							<Input
								type="email"
								id="email"
								name="email"
								placeholder={t(
									"dashboard.account-modal.fields.email.placeholder",
								)}
								defaultValue={user?.email}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="phone">
								{t("dashboard.account-modal.fields.phone.label")}
							</Label>
							<Input
								type="phone"
								id="phone"
								name="phone"
								placeholder={t(
									"dashboard.account-modal.fields.phone.placeholder",
								)}
								defaultValue={user?.phone}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="first_name">
								{t("dashboard.account-modal.fields.first_name.label")}
							</Label>
							<Input
								type="text"
								id="first_name"
								name="first_name"
								placeholder={t(
									"dashboard.account-modal.fields.first_name.label",
								)}
								defaultValue={user?.user_metadata.first_name}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="last_name">
								{t("dashboard.account-modal.fields.last_name.label")}
							</Label>
							<Input
								type="text"
								id="last_name"
								name="last_name"
								placeholder={t(
									"dashboard.account-modal.fields.last_name.label",
								)}
								defaultValue={user?.user_metadata.last_name}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button">
								<span className="text-xs-sm-clamp">
									{t("dashboard.account-modal.buttons.close")}
								</span>
							</Button>
						</DialogClose>
						<LoadingButton
							loadingTextKey="dashboard.account-modal.buttons.loading"
							textKey="dashboard.account-modal.buttons.submit"
						/>
					</DialogFooter>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export default AccountModal;
