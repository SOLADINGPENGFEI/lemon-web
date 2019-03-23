require.config({
	baseUrl: 'js/',
	paths: {
		"index": "pages/index",
		"mui": "libs/mui",
		"picker": "libs/mui.picker.min"
	},
	shim: {
		"picker": {
			deps: ['mui']
		}
	}
})