# Tiny Jekyll site w/ Tailwind

"Tiny Jekyll site," plus Tailwind CSS compilation.

This is where I ended up after following [Steven Westmoreland's](https://stevenwestmoreland.com/2021/01/using-tailwind-css-with-jekyll.html) and [Marcin Doliwa's](https://mdoliwa.com/articles/how-to-setup-jekyll-with-tailwind-css) directions to add Tailwind to [this tiny Jekyll site](https://github.com/kkgthb/web-site-jekyll-01-tiny).

[Sadly](https://github.com/mhanberg/jekyll-postcss/issues/22), JIT mode [doesn't](https://github.com/tailwindlabs/tailwindcss-jit/issues/41) seem to work.

If your localhost environment is on Windows, the `jekyll-postcss` plugin that makes this all work will fail.  You have to install the Windows Subsystem for Linux _(WSL)_ as in [Scott Hanselman's instructions](https://www.hanselman.com/blog/ruby-on-rails-on-windows-is-not-just-possible-its-fabulous-using-wsl2-and-vs-code) and run `NODE_ENV=production JEKYLL_ENV=production bundle exec jekyll build` or `NODE_ENV=development JEKYLL_ENV=development bundle exec jekyll serve` from a WSL command line.

Note:  for convenience, this sample web site includes some `package.json` commands that let you type less text to kick off Jekyll -- you can do `npm run build` and `npm run develop`.  They'll set environment variables appropriately & run `bundle exec jekyll ...` for you.