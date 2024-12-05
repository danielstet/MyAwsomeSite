import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react(),
		{
			name: 'custom-headers',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless'); // Or 'require-corp'
					res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
					res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
					next();
				});
			},
		},
	],
	server: {
		headers: {
			'Cross-Origin-Resource-Policy': 'cross-origin',
			'Cross-Origin-Embedder-Policy': 'credentialless',
			'Cross-Origin-Opener-Policy': 'same-origin',
		},
	},
});
