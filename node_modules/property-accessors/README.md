# Property Accessors Mixin [![Build Status](https://travis-ci.org/atom/property-accessors.svg?branch=master)](https://travis-ci.org/atom/property-accessors)

A mixin for defining dynamic properties.

## Basic Usage

To define a basic property accessor, use the `accessor` declaration. If you've
included the mixin into a class, you define a prototype property by calling
`@::accessor` on its prototype.

```coffee
PropertyAccessors = require 'property-accessors'

class Vehicle
  PropertyAccessors.includeInto(this)

  @::accessor 'type',
    get: ->
      switch @doorCount
        when 4 then 'sedan' # i know this isn't strictly accurate
        when 2 then 'coupe'
    set: (type) ->
      switch type
        when 'sedan' then @doorCount = 4
        when 'coupe' then @doorCount = 2

car = new Vehicle
car.doorCount = 2
car.type # => 'coupe'
```

You can define a class-level property by *extending* with the mixin rather than
including it (which extends the prototype).

```coffee
class Vehicle
  PropertyAccessors.extend(this)

  @accessor 'vehicleCount', get: -> @allVehicles.length  
```

You can just pass a single function if you only want to define a getter:

```coffee
class Vehicle
  PropertyAccessors.includeInto(this)

  @::accessor 'type', -> # ...
```

## Fancy Usage

### Lazy Accessors

Lazy accessors call a function the first time a property is accessed. You are
still free to overwrite this value by assigning the property explicitly.

```coffee
class ScienceLab
  PropertyAccessors.includeInto(this)

  @::lazyAccessor 'crazyComputation', -> computeCrazyComputation()
```

### Advised Accessors

Advised accessors allow you to call code before the reading or writing of a
property value. If a property is being assigned, your advice function is called
with the value being assigned and the old value.

```coffee
class SpyStation
  @advisedAccessor 'online',
    get: -> @ensureAllSystemsNominal()
    set: -> @ensureUserIsSpy()

station = new SpyStation
station.online = true # ensures user is a spy, then assigns true
station.online # ensures all systems are nominal, then returns true
```
