const mix = require("laravel-mix");

const path = require("path");

mix.alias({
  ziggy: path.resolve("vendor/tightenco/ziggy/dist"),
});

mix
  .js("resources/js/app.js", "public/js")
  .react()
  .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
  .setResourceRoot("/");
