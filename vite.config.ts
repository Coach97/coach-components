import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'coach-components',
            formats: ['es', 'umd'],
            fileName: (format) => `coach-components.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'tailwindcss', 'daisyui', '@heroicons/react'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});