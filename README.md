# MongoReplicaSetDockerSolution

Description: Following solution create three containers with MongoDb instance on each, and start replication between them.

To set up enviroment run following commands, based on docker-compose.yml file:

  &nbsp;&nbsp;&nbsp;&nbsp;docker-compose up -d  
  &nbsp;&nbsp;&nbsp;&nbsp;sleep 10  
  &nbsp;&nbsp;&nbsp;&nbsp;docker-compose run mongo-node1 "/usr/src/replicaSet.sh"    
