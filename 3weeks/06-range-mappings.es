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
        "content" : {
          "type" : "text",
          "analyzer" : "nori",
          "fields" : {
              "content_keywords" : {
                  "type" : "keyword"
              }
          }
        },
        "publicationPeriod" : {
            "type" : "date_range",
            "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        }
      }
    }    
  }
}


POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "10월, 할아버지가 방에 들어가신다",
    "publicationPeriod" : {
        "gte" : "2018-10-01",
        "lte" : "2018-10-31"
    }
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "9월, 10월 어머니가 방에 들어가신다",
    "publicationPeriod" : {
        "gte" : "2018-09-01",
        "lte" : "2018-10-31"
    }
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "10월 15일 시누이가 방에 들어가신다",
    "publicationPeriod" : {
        "gte" : "2018-10-15",
        "lte" : "2018-10-31"
    }
}

POST tweets/tweet
{
    "tweetLang": "KO",
    "content": "8월, 9월, 10월 아버지가 방에 들어가신다",
    "publicationPeriod" : {
        "gte" : "2018-08-01",
        "lte" : "2018-10-31"
    }
}
GET tweets/_search
{
    "query" : {
        "range" : {
            "publicationPeriod" : {
                //2018-08-01
                "gte" : 1533081600000
            }            
        }
    }
}

//10월 15일 게시 가능한 트윗목록
GET tweets/_search
{
    "query" : {
        "range" : {
            "publicationPeriod" : {
                //2018-08-01
                "gte" : "2018-10-15",
                "lte" : "2018-10-15",
                "relation" : "contains"
            }            
        }
    }
}