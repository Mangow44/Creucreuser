import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["cubes/fer1.png","cubes/fer2.png","cubes/fer3.png","cubes/fer4.png","cubes/fer5.png","cubes/fossile1.png","cubes/fossile2.png","cubes/fossile3.png","cubes/pierre1.png","cubes/pierre2.png","cubes/terre1.png","favicon.png","tools/foreuse.png","tools/marteau.png","tools/pelle.png","tools/pioche.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e4abc67e.js","imports":["_app/immutable/start-e4abc67e.js","_app/immutable/chunks/index-a53d21d6.js","_app/immutable/chunks/singletons-64141d31.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
