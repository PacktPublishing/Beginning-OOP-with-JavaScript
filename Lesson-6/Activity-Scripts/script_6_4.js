function observable(value) { 
  var subscribers = []; 

  function notify(newValue) { 
      for (var i = 0; i < subscribers.length; i++) { 
        subscribers[i](newValue); 
      } 
  } 

  function accessor(newValue) { 
    if (arguments.length && newValue !== value) { 
      value = newValue; 
      notify(newValue); 
    } 
    return value; 
  } 

  accessor.subscribe = function(subscriber) { 
    subscribers.push(subscriber); 
  }; 

  return accessor; 
}