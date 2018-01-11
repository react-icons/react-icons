var test = require('tape')

var cleanup = require('../')

test("can",function(t){

  t.plan(4)

  var o = {}

  var last = false;

  stop = cleanup(o,'property',10,function(timeLived){
    if(last) {
      t.ok(timeLived > 15,'time lived must be greater than a single ttl ('+timeLived+')')
      stop()
      clearTimeout(testTimer)
    }
  })

  o.property = 10


  setTimeout(function(){
    t.equals(o.property,null,'property should have been set to null')

    o.property = 5;

    setTimeout(function(){

      var a = o.property;
      t.equals(a,5,'a should retain value for timeout less than gc interval')

      var _t = Date.now()
      setTimeout(function(){

        last = true;
        var a = o.property;
        t.equals(a,5,'a should still retain value because getters extend ttl')

      },5)

    },8)
  
  },15)


  // test timelimit. the cleanup library unrefs all timers.
  var testTimer = setTimeout(function(){},1000)  

})




