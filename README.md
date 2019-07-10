# MongoReplicaSetDockerSolution

Description: Following solution create three containers with MongoDb instance on each, and start replication between them.

To set up enviroment run following commands, based on docker-compose.yml file:

  docker-compose up -d  
  sleep 10  
  docker-compose run mongo-node1 "/usr/src/replicaSet.sh"  
  
