## Setting up Kafka in Local (MacOS)

### Install Kafka
```brew install Kafka```

### Start Zookeeper
```zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties```

### Start Kafka (running on Port 9092)
```kafka-server-start /usr/local/etc/kafka/server.properties```

### Create a topic
```kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic my-first-topic```

### Create producer console
```kafka-console-producer --broker-list localhost:9092 --topic my-first-topic```

### Create consumer console
```kafka-console-consumer --bootstrap-server localhost:9092 --topic my-first-topic --from-beginning```


### Start Kafka producer NestJs microservice (running on Port 8080)
```
$ cd nestjs-client-proxy
$ git checkout kafka-producer
$ npm i
$ npm start
```

### Start Kafka consumer NestJS microservice (running on Port 3000)
```
$ cd nestjs-microservice
$ git checkout kafka-consumer
$ npm i
$ npm start
```

### Test posting message to topic `my-first-topic` 
Open browser and go to http://localhost:3000/.