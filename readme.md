For example will create 10 Users
```js
[
    {
        "_model": "User",
        "_count": 10,
        "name": "User {{Math.floor(Math.random(50) * 10)}}"
    }
]
```

Anything between `{{` and `}}` is evaled.
