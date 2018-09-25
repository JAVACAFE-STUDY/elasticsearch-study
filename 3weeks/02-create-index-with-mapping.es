DELETE books

PUT books
{
  "settings" : {
    "number_of_shards" : 3,
    "number_of_replicas" : 1
  },
  "mappings" : {
    "_doc" : {
      "properties" : {
        "title_ko" : {
          "type" : "text",
          "analyzer" : "nori"
        },
        "title_en" : {
          "type" : "text"
        },
        "pub_date" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        },
        "desc_ko" : {
          "type" : "text",
          "analyzer" : "nori"
        }
      }
    }    
  }
}
GET books/_mapping

POST books/_doc
{
  "title_ko" : "아버지가 방에 들어가신다",
  "title_en" : "Father Enters the RoOm.",
  "author" : "자바카페",
  "pub_date" : 1420070400001, //2015년 1월 1일
  "desc_ko" : "세상 모두가 놀란 감동 실화! 아버지가방에 들어가시는  101가지 방법. 자바카페에서 최초로 공개됩니다. "
}

GET _analyze
{
  "text" : "아버지가 방에 들어가신다",
  "analyzer": "nori"
}

GET books/_search
{
  "query": {
    "match": {
      "title_en": "room"
    }
  }
}

GET books/_search
{
  "query": {
    "match": {
      "title_ko": "아버지"
    }
  }
}