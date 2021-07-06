# Locally, stop doing "jekyll serve" and start doing "bundle exec jekyll serve".
# And if that doesn't work, run "bundle install" first to create a Gemfile.lock
# or "bundle update" to update the Gemfile.lock

source "https://rubygems.org"

gem "webrick"
gem "jekyll"

group :jekyll_plugins do
  gem 'jekyll-postcss'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

