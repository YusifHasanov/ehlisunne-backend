import { createContext } from '@/src/server/context';
import { appRouter } from '@/src/server/routers/_app.router';
import * as trpcNext from '@trpc/server/adapters/next';
 
// export API handler
// @see https://trpc.io/docs/api-handler
//change to edge function

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});

 