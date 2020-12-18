# Breaking- Bad Character Look up

This app uses breaking-bad API to fetch information of characters in the show. The app lists out the characters in a tabular format on the screen. 

It includes a search feature to search the character using the on-screen name of the character. 

Technologies: 

* ReactJS

* Bootstrap
* HTML/CSS
* Docker



#### Steps to install docker:

I used amazon EC2 instance to dockerize my application: 

Commands to get started: 

1. `yum update -y`
2. `amazon-linux-extras install docker`
3. `service docker start`
4. `usermod -a -G docker ec2-user`
5. `chkconfig docker on`



## Script to build Docker image of the project: 

```
docker build --tag breaking-bad-app .
```



## Script to run container:

```
docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:80 --rm breaking-bad-app
```