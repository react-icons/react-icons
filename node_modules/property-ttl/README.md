# property-ttl
null out a property after ttl if it has not been accessed.

if you have a case where something makes large data objects but you can't or don't want to hold them all in memory all the time. This allows you to null out those propertys if they are not being used.

```js
var cleanup = require('property-ttl')

var registry = {
  getData:function(){
    if(!data) this.data = generateOodlesOfData()
    return this.data
  },
  data:null
}

// every 2000 ms of inactivity clear this property out.
cleanup(registry,'data',2000)

doActionWithData(registry.getData())

// `registry.data === null` === false
setTimeout(function(){
  // `registry.data === null` === true
},2010)

```

After 2000 ms the property is nulled out agian freeing up that memory for handling other kinds of server requests. 
If the peoperty was accessed every 1500 ms it would never be cleared because the ttl will keep extending on each access.


## api

- `var cleanup = require('process-ttl')`

- `cleanup(object, property, ttl, ongc)`
  - object, the object that owns the property
  - property, the property name you want to manage. it need not be defined.
  - ttl, the time in ms you want an inactive property to hang around.
  - ongc(timeLived), OPTIONAL the ongc callback fires each time a property is gced.

- cleanup.defaultValue === null
  - this property changes the module default value for cleared peoperties, default null

