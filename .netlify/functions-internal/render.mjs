import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","logo/inventory.png","logo/inventory_cross.png","ressources/break1.png","ressources/break2.png","ressources/break3.png","ressources/fer.png","ressources/fossile.png","ressources/pierre.png","ressources/terre.png","tools/maillet&burin_en_pierre.png","tools/pelle_en_pierre.png","tools/pioche_en_pierre.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7f82f244.js","imports":["_app/immutable/start-7f82f244.js","_app/immutable/chunks/index-6322b2e6.js","_app/immutable/chunks/singletons-1502aa28.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "connexion",
				pattern: /^\/connexion\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "inscription",
				pattern: /^\/inscription\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
