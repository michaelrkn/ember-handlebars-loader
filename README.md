# Ember Handlebars Loader

## Background

Many developers using Ember for the first time aren't comfortable with build tools that can precompile their Handlebars templates, and so they write their templates directly into their `index.html` like:

```
<!doctype html>
<html>
<head>
  <title>My Ember app</title>

  <script src="libs/jquery-1.11.1.js"></script>
  <script src="libs/handlebars-1.3.0.js"></script>
  <script src="libs/ember-1.6.1.js"></script>
  <script src="my-ember-app.js"></script>

</head>
<body>

  <script type="text/x-handlebars" data-template-name="application">
    <h1>I'm a Handlebars template.</h1>
  </script>

</body>
</html>
```

This approach has a couple of great advantages, namely that it works on the `file://` protocol and it doesn't require any extra dependencies.

However, it also has some disadvantages. With more than just a couple templates, it become difficult to keep track of where anything is. It doesn't help build a good mental model of how Handlebars templates are incorporated into an Ember app. And it doesn't prepare new Ember developers for how their code should be organized when they eventually switch to Ember CLI or some other build tool.

## Usage

Ember Handelbars Loader makes the opposite set of trade-offs, letting you write your `index.html` like:

```
<!doctype html>
<html>
<head>
  <title>My Ember app</title>

  <script src="libs/jquery-1.11.1.js"></script>
  <script src="libs/handlebars-1.3.0.js"></script>
  <script src="libs/ember-1.6.1.js"></script>
  <script src="libs/ember-handlebars-loader-0.0.1.js"></script>
  <script src="my-ember-app.js"></script>

  <script>
    EmberHandlebarsLoader.loadTemplates([
      'application', 'about', 'posts', 'post', 'new-post', 'recent-comments'
    ]);
  </script>

</head>
<body>
</body>
</html>
```

Include a `<script>` tag to load the library, store your templates in a `templates` folder with the `.hbs` extension (e.g. `templates/application.hbs`), and then run `EmberHandlebarsLoader.loadTemplates()` passing in an array of the names of your templates.

The library loads the templates using AJAX, which most browsers don't allow on the `file://` protocol. You must either disable the security policy (e.g. on Macs `$ open /Applications/Google\ Chrome.app --args –allow-file-access-from-files`) or serve your files with a web server (e.g. on Macs `$ python -m SimpleHTTPServer`).

## HTMLBars support

HTMLBars is supported as of 0.0.2. The original library name of Ember Handlebars Loader has not been changed yet to avoid confusion for people using this library as part of the Treehouse Ember.js course.
