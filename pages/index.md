---
permalink: index.html
---
<html>
  <head>
	  <title>Tiny Jekyll web site with Tailwind CSS</title>
    <link rel="stylesheet" href="/assets/css/main.css"/>
  </head>
  <body>
    <div class="mx-auto prose">
	  <p class="font-bold text-green-800 bg-yellow-100">Hello, world -- there's Tailwind CSS on this Jekyll site.</p>
    <p><a href="https://github.com/kkgthb/web-site-jekyll-02-tailwind-tiny">Source code on GitHub</a>, or see the <a href="https://katiekodes.com/jekyll-tailwind/">accompanying blog post</a>.</p>
	  <p><a href="https://github.com/mhanberg/jekyll-postcss/issues/22">Sadly</a>, JIT mode <a href="https://github.com/tailwindlabs/tailwindcss-jit/issues/41">doesn't</a> seem to work.</p>
	  <p>If your localhost environment is on Windows, the <code class="bg-blue-100">jekyll-postcss</code> plugin that makes this all work will fail.  You have to install the Windows Subsystem for Linux <i>(WSL)</i> as in <a href="https://www.hanselman.com/blog/ruby-on-rails-on-windows-is-not-just-possible-its-fabulous-using-wsl2-and-vs-code">Scott Hanselman's instructions</a> and run <code class="bg-blue-100">NODE_ENV=production JEKYLL_ENV=production bundle exec jekyll build</code> or <code class="bg-blue-100">NODE_ENV=development JEKYLL_ENV=development bundle exec jekyll serve</code> from a WSL command line.</p>
    <p>Also, it's a barebones Jekyll site, so when you play w/ your theme while running a <code class="bg-blue-100">localhost</code> server, be sure to hand-refresh the page since there's no browsersync.</p>
    </div>
  </body>
</html>