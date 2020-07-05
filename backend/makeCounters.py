import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["counterservice"]
counters = db["counters"]

counters_template = {"counterName": "Something Didn't Happened", "daysSince": 1}
counters.insert_one(counters_template)