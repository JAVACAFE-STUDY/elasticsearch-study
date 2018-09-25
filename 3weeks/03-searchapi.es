http://esbook.javacafe.io:20010/books/_search?q=title_ko:아버지

POST books/_doc
{
  "title_ko" : "어머니가 방에 들어가신다",
  "title_en" : "Father Enters the RoOm.",
  "author" : "자바카페",
  "pub_date" : "2018-01-01",
  "desc_ko" : "세상 모두가 놀란 감동 실화! 어머니가방에 들어가시는  101가지 방법. 자바카페에서 최초로 공개됩니다. "
}

GET books/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "match": {
                        "title_ko": "방에"
                    }
                },
                {
                    "range": {
                        "pub_date": {
                            "gte": "2017-12-31"
                        }
                    }
                }
            ]
        }
    }
}

http://esbook.javacafe.io:20010/books/_search?q=title_ko:방에 AND pub_date:>=2017-12-31
