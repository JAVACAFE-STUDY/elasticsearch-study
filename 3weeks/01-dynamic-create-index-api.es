DELETE books

POST books/_doc
{
  "title_ko" : "아버지가 방에 들어가신다",
  "title_en" : "Father Enters the RoOm.",
  "author" : "자바카페",
  "pub_date" : 1420070400001,
  "desc_ko" : "세상 모두가 놀란 감동 실화! 아버지가방에 들어가시는  101가지 방법. 자바카페에서 최초로 공개됩니다. "
}

GET books/_mapping

GET _analyze
{
  "text" : "아버지가 방에 들어가신다",
  "analyzer": "standard"
}

GET _analyze
{
  "text" : "Father Enters the RoOm.",
  "analyzer": "standard"
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