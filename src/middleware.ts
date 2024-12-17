import { clerkMiddleware } from "@clerk/nextjs/server";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default clerkMiddleware(); // TODO: watch out for this linter error cause

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};