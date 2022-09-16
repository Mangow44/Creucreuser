import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","logo/inventory.png","logo/inventory_cross.png","ressources/break1.png","ressources/break2.png","ressources/break3.png","ressources/fer.png","ressources/fossile.png","ressources/pierre.png","ressources/terre.png","tools/maillet&burin_en_pierre.png","tools/pelle_en_pierre.png","tools/pioche_en_pierre.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-93ff7418.js","imports":["_app/immutable/start-93ff7418.js","_app/immutable/chunks/index-8977694a.js","_app/immutable/chunks/singletons-f4418a10.js"],"stylesheets":[]},
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
