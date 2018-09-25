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
        "title" : {
          "type" : "text",
          "analyzer" : "nori"
        },
        "genre" : {
          "type" : "keyword"
        },
        "pub_date" : {
          "type" : "date",
          "format" : "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
        },
        "price" : {
            "type" : "double"
        }
      }
    }    
  }
}


POST books/_doc
{
    "title": "어머니가 방에 들어가신다",
    "genre": ["공포","호러","드라마"],
    "pub_date": "2018-01-01",
    "price": "39900"
}

POST books/_doc
{
    "title": "시누이가 방에 들어가신다",
    "genre": ["호러","드라마"],
    "pub_date": "2017-01-01",
    "price": "19900"
}

POST books/_doc
{
    "title": "아버지가 방에 들어가신다",
    "genre": ["멜로","SF","드라마"],
    "pub_date": "2017-10-01",
    "price": "9900"
}

POST books/_doc
{
    "title": "아들이 방에 들어가신다",
    "genre": ["SF","드라마"],
    "pub_date": "2017-11-01",
    "price": "9901"
}

POST books/_doc
{
    "title": "고모가 방에 들어가신다",
    "genre": ["가족","모험","드라마"],
    "pub_date": "2018-11-01",
    "price": "59900"
}

POST books/_doc
{
    "title": "강아지가 방에 들어가신다",
    "genre": ["아동","종교","코미디","드라마"],
    "pub_date": "2018-01-01",
    "price": "139900"
}

POST books/_doc
{
    "title": "고양이가 방에 들어가신다",
    "genre": ["재난","옴니버스","전쟁","교육","드라마"],
    "pub_date": "2012-01-01",
    "price": "49900"
}

POST books/_doc
{
    "title": "코끼리가 방에 들어가신다",
    "genre": ["재난","멜로","모험","드라마"],
    "pub_date": "2013-09-01",
    "price": "39900"
}

POST books/_doc
{
    "title": "오빠가 방에 들어가신다",
    "genre": ["재난","전쟁","청춘","드라마"],
    "pub_date": "2018-01-01",
    "price": "39900"
}

//장르별 집계
POST books/_search
{
    "aggs": {
        "genre": {
            "terms": {
                "field": "genre"
            }
        }
    }
}

//장르별 평균가격
POST books/_search
{
    "aggs" : {
        "genres" : {
            "terms" : {
                "field" : "genre"
            },
            "aggs": {
                "prices": {
                    "sum": {
                        "field": "price"
                    }
                }
            }
        }
    }
}