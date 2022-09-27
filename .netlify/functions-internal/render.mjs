import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/AvocadoCake.otf","logo/arrow.png","logo/book.png","logo/book_cross.png","logo/cross.png","logo/inventory.png","logo/inventory_cross.png","ressources/break1.png","ressources/break2.png","ressources/break3.png","ressources/fer.png","ressources/fossile.png","ressources/gravier.png","ressources/or.png","ressources/pierre.png","ressources/terre.png","tools/maillet&burin_en_bois.png","tools/maillet&burin_en_fer.png","tools/maillet&burin_en_or.png","tools/maillet&burin_en_pierre.png","tools/pelle_en_bois.png","tools/pelle_en_fer.png","tools/pelle_en_or.png","tools/pelle_en_pierre.png","tools/pioche_en_bois.png","tools/pioche_en_fer.png","tools/pioche_en_or.png","tools/pioche_en_pierre.png","worlds/sous-sol.png","worlds/surface.png"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf"},
	_: {
		entry: {"file":"_app/immutable/start-91f02f0c.js","imports":["_app/immutable/start-91f02f0c.js","_app/immutable/chunks/index-d8e7f949.js","_app/immutable/chunks/singletons-e54fe39d.js"],"stylesheets":[]},
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
