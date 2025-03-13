import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Edit } from "lucide-react"
import Form from "next/form"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { createClient } from "@/supabase/server"

async function AccountModal() {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    const handleEditAccountDetails = async () => {
        "use server"
        console.log("Edit Account Details")
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full p-2">
                    <Edit />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Account Info</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <Form action={handleEditAccountDetails}>
                    <div className="flex gap-4 flex-col">
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input type='email' id='email' name='email' placeholder='example@mail' defaultValue={data.user?.email} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='phone'>Phone</Label>
                            <Input type='phone' id='phone' name="phone" placeholder='phone' defaultValue={data.user?.phone} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='first_name'>First Name</Label>
                            <Input type='text' id='first_name' name="first_name" placeholder='first name' defaultValue={data.user?.user_metadata.first_name} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='last_name'>Last Name</Label>
                            <Input type='text' id='last_name' name="last_name" placeholder='last name' defaultValue={data.user?.user_metadata.last_name} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button">Close</Button>
                        </DialogClose>
                        <Button>Edit Account</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>

    )
}

export default AccountModal