import { auth } from "@/auth";
import Email from "next-auth/providers/email";

import { redirect } from "next/navigation";

export default async function dashboard() {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }

    const Email = session.user?.email;

    return (
        <div>
            <h1>{Email}</h1>
        </div>
    );
}
