var rsconf = {_id: "rs0",members: [{_id:0, host: "mongo-node1:27017"},{_id:1, host: "mongo-node2:27017"},{_id:2, host: "mongo-node3:27017", arbiterOnly: true}]};
rs.initiate(rsconf);
rs.conf();