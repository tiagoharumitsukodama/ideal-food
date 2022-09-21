
# Download and install the public signing key:

wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg


# Install the apt-transport-https packages

sudo apt-get install apt-transport-https

# Save the repository definition

echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list


# Install the Elasticsearch Debian package

sudo apt-get update && sudo apt-get install elasticsearch


# Configure Elasticsearch and Disable Security. V8 comes with security enabled

sudo nano /etc/elasticsearch/elasticsearch.yml


node.name:  node-1


network.host: 0.0.0.0

discovery.seed.hosts: ["127.0.0.1"]

xpack.security.enabled: false

cluster.initial_master_nodes: ["node-1"]


# Increase default timeout for Elasticsearch start operation. Running Elasticsearch can be slow on your laptop. 

sudo nano /lib/systemd/system/elasticsearch.service

TimeoutStartSec=600

# Open another session and give permissions to read elasticsearch logs

sudo chmod 755 -R /var/log/elasticsearch/

# Configure Elasticsearch to start automatically when the system boots up
sudo /bin/systemctl daemon-reload
sudo /bin/systemctl enable elasticsearch.service

# Elasticsearch can be started as follows
sudo /bin/systemctl start elasticsearch.service
sudo /bin/systemctl status elasticsearch.service

# install curl
sudo apt-get install curl

# Check that Elasticsearch is running
curl -XGET 127.0.0.1:9200



# Download mapping for index
sudo wget http://media.sundog-soft.com/es8/shakes-mapping.json


curl -H "Content-Type: application/json" -XPUT 127.0.0.1:9200/shakespeare --data-binary @shakes-mapping.json

# Download shakespeare data
sudo wget http://media.sundog-soft.com/es8/shakespeare_8.0.json

# Index data to Elasticsearch
curl -H "Content-Type: application/json" -XPUT '127.0.0.1:9200/shakespeare/_bulk' --data-binary @shakespeare_8.0.json

# Try searching a phrase

curl -H "Content-Type: application/json" -XGET '127.0.0.1:9200/shakespeare/_search?pretty' -d '
{
"query" : {
"match_phrase" : {
"text_entry" : "to be or not to be"
}
}
}' 