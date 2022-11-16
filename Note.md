## RUN DOCKER LOCALLY IN YOUR DOCKER TO TEST THE SERVIVES

## Follow the instructions below:

# 1. docker pull mongo
# 2. docker run -d --name [dockerimagename] -p [yourlocalhostport]:27017 -e MONGO_INITDB_ROOT_USERNAME=[username] -e MONGO_INITDB_ROOT_PASSWORD=[password] mongo
# 3. copy and paste the isntance  [mongodb://username:password0.0.0.0:yourlocalhostport/]



## example : docker run -d --name skyfri_mongodb_assignment_server -p 27000:27017 -e MONGO_INITDB_ROOT_USERNAME=skyfri -e MONGO_INITDB_ROOT_PASSWORD=skyfri mongo
## mongodb://skyfri:skyfri@0.0.0.0:27000/

