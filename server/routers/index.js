import combineRouters from  'koa-combine-routers';
import scriptTagRouter from './script-tag';

//combine your different routers here
const router = combineRouters(
  scriptTagRouter,
)

export default router;