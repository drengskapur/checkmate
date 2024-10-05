export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.BLGEmypl.js","app":"_app/immutable/entry/app.Bg0kdbdA.js","imports":["_app/immutable/entry/start.BLGEmypl.js","_app/immutable/chunks/entry.nSNkyMSo.js","_app/immutable/chunks/scheduler.CLOVJmCQ.js","_app/immutable/chunks/index.D1cIUrcn.js","_app/immutable/entry/app.Bg0kdbdA.js","_app/immutable/chunks/scheduler.CLOVJmCQ.js","_app/immutable/chunks/index.BewsEQmK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
