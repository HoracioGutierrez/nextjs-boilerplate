"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Edit } from "lucide-react"
import Form from "next/form"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { handleEditAccountDetails } from "@/actions/handleEditAccountDetails"
import AccountModalButton from "./acount-modal-button"
import { useState } from "react"
import toast from "react-hot-toast"

function AccountModal({ user }: { user: any }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCloseModal = () => setIsModalOpen(false)

    const handleFormAction = async (formData:FormData) => {
        handleCloseModal()
        toast.promise(handleEditAccountDetails(formData), {
            loading : 'Updating account details',
            success : () => 'Account details updated',
            error : () => 'Failed to update account details'
        })
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full p-2">
                    <Edit />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Account Info</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently modify your account.
                    </DialogDescription>
                </DialogHeader>
                <Form action={handleFormAction} className="flex flex-col gap-4">
                    <div className="flex gap-4 flex-col">
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input type='email' id='email' name='email' placeholder='example@mail' defaultValue={user?.email} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='phone'>Phone</Label>
                            <Input type='phone' id='phone' name="phone" placeholder='phone' defaultValue={user?.phone} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='first_name'>First Name</Label>
                            <Input type='text' id='first_name' name="first_name" placeholder='first name' defaultValue={user?.user_metadata.first_name} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='last_name'>Last Name</Label>
                            <Input type='text' id='last_name' name="last_name" placeholder='last name' defaultValue={user?.user_metadata.last_name} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button">Close</Button>
                        </DialogClose>
                        <AccountModalButton />
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>

    )
}

export default AccountModal