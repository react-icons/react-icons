# Emissary – Mixins for Events [![Build Status](https://travis-ci.org/atom/emissary.svg?branch=master)](https://travis-ci.org/atom/emissary)

**Achtung!** This library is currently used in Atom and various Atom dependencies, but our long-term plan is to transition away from it in favor of the simpler [event-kit](https://github.com/atom/event-kit) library. Don't depend on supporting this library forever.

**Achtung Again!** The Subscriber mixin requires ES6 Harmony WeakMaps. To enable them, run your program with the  `node --harmony_collections` flag. If you're using it in a node framework such as jasmine, run its script with the flag enabled as follows: `node --harmony-collections .bin/jasmine-node specs`.

## Emitter

Emitter is backward-compatible with Node's event emitter, but offers more functionality. You can construct standalone `Emitter` instances or use it as a mixin.

* `Emitter.extend(object)`
  Turns the given object into an emitter by adding the appropriate methods.

* `Emitter.includeInto(class)`
  Turns the class into an emitter by extending its prototype.

* `::on(eventNames, handler)`
  Subscribe to one or more events. Events names are separated by spaces, and can optionally be namespaced with a dot-suffix. E.g. `event1 event2.namespace`.

* `::once(eventName, handler)`
  Like `::on`, but only fires the handler once before unsubscribing automatically.

* `::off(eventNames[, handler])`
  Unsubscribe to one or more events. Event names are separated by spaces. Passing a non-namespaced event name unsubscribes from every namespace for that event. Passing only a namespace unsubscribes from that entire namespace. Passing a handler removes only a subscription corresponding to the given event name(s) and that handler.

* `::emit(eventName[, data...])`
  Emit an event with the given name. If the event name is namespaced, only calls handlers for the event associated with the namespace, otherwise it fires all handlers. Handlers are called with zero or more data arguments provided after the event name.

* `::pauseEvents()`
  Buffers events instead of emitting them until `::resumeEvents` is called.

* `::resumeEvents()`
  Emits all events buffered since pausing and resumes normal emitting behavior.

* `::getSubscriptionCount()`
  Get the total number of handlers registered on the emitter.

## Subscriber

Subscriber works in partnership with an emitter or any object supporting subscription cancellation with `.off`. This includes standard Node event emitters and jQuery objects.

* `::subscribe(object, eventNames, handler)`
  Subscribe to the given event name(s) on the given object.

* `::subscribeWith(object, methodName, eventNames, handler)`
  Subscribe to the given object with a method other than `.on`.

* `::unsubscribe([object])`
  Cancel subscriptions previously registered with `::subscribe`. If an object is given, only unsubscribe from that object. If called without an object, unsubscribe from everything.
