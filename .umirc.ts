import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site', // site
  title: 'USKid UI',
  favicon: 'https://uskid.com/favicon.ico',
  logo: 'https://uskid.com/favicon.ico',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config

  navs: [
    null,
    {
      title: 'Github',
      path: 'https://uskid.com'
    },
  ],
});
