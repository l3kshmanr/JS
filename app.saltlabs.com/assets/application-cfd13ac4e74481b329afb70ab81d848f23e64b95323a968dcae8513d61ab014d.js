// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// Failing import here breaks all turbo on the site. No turbo loaded, means iOS app will fail because window.Turbo is undefined.
// To make our app more robust, load global external libraries separately in application.html.slim using javascript_import_module_tag
import "@hotwired/turbo-rails"
import "controllers"
import "channels"
import "chartkick"
import "Chart.bundle"

import LocalTime from "local-time"
LocalTime.start();

// Allow us to "break out" of a turbo frame from a controller 
// See: https://github.com/hotwired/turbo-rails/pull/367
Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target, { action: "replace" });
};
