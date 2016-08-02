# mgw-template

An api connect microgateway template

# install
```
$ git clone https://github.com/No9/mgw-template.git
$ cd mgw-template
$ npm install
```

# run sample

You can run the sample straight away  
```
$ npm start
```
This runs the sample policy `skate-client.yaml` in the root folder


Then in a a seperate console

```
node skate-client.js
```

If you would like to create your own policy then delete `skate-client.yaml` and run 

`apic edit` in the root folder


```
$ node . 
```
