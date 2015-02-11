var EmberHandlebarsLoader = {
  loadTemplates: function(templateNames) {
    templateNames.forEach(function(name) {
      $.ajax({
        url: "templates/" + name + ".hbs",
        async: false,
        success: function(template) {
          if (Ember.HTMLBars) {
            var compiledTemplate = Ember.HTMLBars.compile(template);
            Ember.TEMPLATES[name] = Ember.HTMLBars.template(compiledTemplate);
          } else {
            var compiledTemplate = Ember.Handlebars.precompile(template);
            Ember.TEMPLATES[name] = Ember.Handlebars.template(compiledTemplate);
          }
        }
      });
    });
  }
};
