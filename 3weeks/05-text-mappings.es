DELETE tweets

PUT tweets
{
  "settings" : {
    "number_of_shards" : 3,
    "number_of_replicas" : 1
  },
  "mappings" : {
    "tweet" : {
      "properties" : {
        "tweetLang" : {
            "type" : "keyword"
        },
        "tags" : {
            "type" : "keyword"
        },
        "content" : {
          "type" : "text",
          "analyzer" : "nori",
          "fields" : {
              "content_keywords" : {
                  "type" : "keyword"
              }
          }
        }
      }
    }    
  }
}


POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "할아버지가 방에 들어가신다",
    "tags" : "#할아버지"
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "어머니가 방에 들어가신다",
    "tags" : ["#어머니","#엄마","#방","#가족"]
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "시누이가 방에 들어가신다",
    "tags" : ["#시누이","#가족","#방"]
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "아버지가 방에 들어가신다",
    "tags" : ["#아버지","#가족"]
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "강아지가 방에 들어가신다",
    "tags" : "#강아지"
}



GET tweets/_search
{
    "query" : {
        "match" : {
            "content" : "방"
        }
    },
    "sort" : {
        "content.content_keywords" : "asc"
    }
}

POST tweets/_search
{
    "aggs": {
        "tags_cnt": {
            "terms": {
                "field": "tags"
            }
        }
    }
}