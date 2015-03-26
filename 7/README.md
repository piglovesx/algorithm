Let's take a look at an interesting feature of JS: custom Getters and Setters for objects.

[帮助链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FWorking_with_Objects#Defining_Getters_and_Setters)

The object of this exercise will be to provide a constructor named "Archiver" that creates a "self-archiving" object with respect to its "temperature" property, but otherwise looks and acts just like a normal JS object. Each time the "temperature" property is assigned, the object should add a log entry to an array (the "archive") that it returns via a "getArchive" function. The log entry should be formed as such: {date: //the Date when the "temperature" property was assigned, val: //the value that was written to the "temperature" property.} . The "date" property of the log entry should be a valid JS Date object.

```
//new Date() == '2013-09-24...Z'
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]
```