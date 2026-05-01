// Import and register all your controllers from the importmap under controllers/*
import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

import { Autocomplete } from 'stimulus-autocomplete'
application.register('autocomplete', Autocomplete)

// https://www.stimulus-components.com/docs/stimulus-notification/
import Notification from 'stimulus-notification'
application.register('notification', Notification)

import { Bridge } from "bridge"
// Expose this on the window object so TurboNative can interact with it
window.TurboNativeBridge = Bridge;
