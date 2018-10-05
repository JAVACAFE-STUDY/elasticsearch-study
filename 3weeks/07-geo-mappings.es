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
        "content" : {
          "type" : "text",
          "analyzer" : "nori",
          "fields" : {
              "content_keywords" : {
                  "type" : "keyword"
              }
          }
        },
        "location": {
          "type": "geo_point"
        }
      }
    }    
  }
}


POST tweets/tweet
{
    "content": "대전 광역시청",
    "location": {
        "lat": 36.350465,
        "lon": 127.384822
    }
}

POST tweets/tweet
{
    "content": "대전광역시 서부교육지원",
    "location": {
        "lat": 36.31415,
        "lon": 127.378985
    }
}

POST tweets/tweet
{
    "text": "충청남도 충청남도청",
    "location": {
        "lat": 36.733374,
        "lon": 126.658263
    }
}

//대전 지역에 대한 쿼리
GET tweets/_search
{
  "query": {
    "geo_bounding_box": {
      "location": {
        "top_left": "wy6x0vqyhuq6", //geohash
        "bottom_right": {
          "lat": 36.285773,
          "lon": 127.504519
        }
      }
    }
  }
}
