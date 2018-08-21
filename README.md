# fetch-rest-client
A restfull package to use on JavaScript projects. The methods is implementing fetch API

This is a project based on pure JavaScript, implemented with promises(Don't worry, you dont need hadle with this to use our package) and
designed to be a low-weight REST client using fetch API.

## How to use

### Installation and Use

You need to install from npm 
```
npm i fetch-rest-client
```

To use in your project, you just need to import the client class from the package

```
import FetchClient from 'fetch-rest-client'
```

Create a instance of FetchClient

```
fetchClient = new FetchClient();
```

After this, you can just use the methods GET, POST, PUT, DELETE.

GET Sample:

```
fetchClient.get('your URL', {Headers Object are optionals}).then(response => {
  //what you want
});
```
POST, PUT and DELETE have the same params, just change 'post' method to 'put' or 'delete'

Sample: 

```
fetchClient.post('your URL',{body object}, {Headers Object are optionals}).then(response => {
  //what you want
});
```

### Headers 

Headers are optionals params. but all methods accept a header object. 

The default object is 
```
{'Content-Type': 'application/json'}
```

but you can send your own object, just remenber to add 'Content-Type' param in your headers objects.


## Support

If you get some error or some suggestion to improve this package, please, open a issue on [GitHub](https://github.com/matheusmonte/fetch-rest-client/issues)  

## Project RoadMap

You can check the project roadMap on this [Board](https://github.com/matheusmonte/fetch-rest-client/projects/1)



