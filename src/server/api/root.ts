import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { loginRouter } from "./routers/login";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  address: exampleRouter,
  login: loginRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
