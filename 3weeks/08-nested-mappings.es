DELETE tweets

PUT tweets
{
    "settings": {
        "number_of_shards": 3,
        "number_of_replicas": 1
    },
    "mappings": {
        "tweet": {
            "properties": {
                "userName": {
                    "type": "keyword"
                },
                "following": {
                    "type": "nested"
                }
            }
        }
    }
}

PUT tweets/tweet/1
{
  "userName": "@realDonaldTrump",  
  "following": [
    {
      "userName": "@WhiteHouse",
      "locations": "Washington, DC"
    },
    {
      "userName": "@LaraLeaTrump",
      "locations": "New York City"
    },
    {
      "userName": "@TrumpChicago",
      "locations": "Chicago, IL"
    }
  ]
}

GET tweets/_mapping


GET tweets/_search
{
  "query": {
    "nested": {
      "path": "following",
      "query": {
        "bool": {
          "must": [
            {
              "match": { "following.userName": "@WhiteHouse" }
            },
            {
              "match": { "following.locations": "Washington, DC" }
            }
          ]
        }
      }
    }
  }
}
