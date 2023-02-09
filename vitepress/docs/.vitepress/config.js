// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { theme } from '../src/custom/theme'

export default defineConfig({
    outDir: './.vitepress/dist',
    srcDir: './src/pages',
    cleanUrls: 'with-subfolders',
    ignoreDeadLinks: true,
    /* head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ], */
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    lastUpdated: true,
    title: 'Arduino Discord Wiki',
    description: 'The open source wiki for the Arduino discord server',
    themeConfig: theme,
})