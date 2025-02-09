import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { auth, signIn } from "@/auth";

import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();
    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Adx Inc.
                </a>
                <div className={cn("flex flex-col gap-6")}>
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Welcome back</CardTitle>
                            <CardDescription>Login with your GitHub account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn("github");
                                }}
                            >
                                <div className="grid gap-6">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="outline" className="w-full" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            Login with GitHub
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
