module.exports = {
	env: {
		node: true
	},

	extends: [
		'./esnext',
		'./esnext/style-guide'
	].map(require.resolve)
}