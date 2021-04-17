import Router from 'koa-router';
import { createScriptTag } from '../controllers/script-tag-controller';
import Shopify from "@shopify/shopify-api";

const router = new Router({prefix:'/script-tag'});

//add routes to the above router
router.get('/', async(ctx) => {
  ctx.body = "Get a script tag";
});

router.get('/all', async(ctx) => {
  ctx.body = "Get all script tag";
});

router.post('/', async(ctx) => {
  const { shop, accessToken } = ctx.sessionFromToken;
  console.log("Session from token", ctx.sessionFromToken);
  await createScriptTag(shop, accessToken);
  ctx.body = `Create a script tag ${shop} ${accessToken}`;
});

router.delete('/', async(ctx) => {
  ctx.body = "Delete a script tag";
});


export default router;