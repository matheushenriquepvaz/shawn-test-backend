
# Github user list

Frontend for Shawn and Partners challenge

Use node (16^) to follow the bellow steps

## Installing

run those commands on the root directory

```bash
  npm install
```


## Running



run those commands on the root directory

```bash
  npm run dev
```
    
and you will see in the console the URL to access the app just like bellow:

![app-url-link-port](https://user-images.githubusercontent.com/49080260/233885646-9ce4ddd5-29f5-4c1a-b127-2deb6d1d5448.PNG)

## Main Page

As soon as you open the root of the app URL you will see the list of users: 


![telainicial-shawn-front](https://user-images.githubusercontent.com/49080260/233883879-576f4fcf-0cd5-494f-83ad-c1506c524a94.PNG)


using `?since={numbervalue}` in the main URL you will be able to paginate the list, starting by 0. (This resource can be used by clicking in the buttons `PREVIOUS` and `NEXT` bellow the list)

## Detail Page

Under the route `/{username}/details` you will be able to see some infos about the user such as his Login and a list of his repos: 

![teladetalhes-shawn-front](https://user-images.githubusercontent.com/49080260/233883920-a255024a-949d-4ca3-96aa-d0e8277e2871.PNG)

