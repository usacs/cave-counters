import pymongo
from pymongo import MongoClient
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from apscheduler.schedulers.background import BackgroundScheduler
import atexit


app = Flask(__name__)
CORS(app)
client = pymongo.MongoClient("mongodb://localhost:27017/")

#Increment Counters in Database
def updateCounters():
    db = client["counterservice"]
    for counter in db["counters"].find({}, projection={"_id": False}):
        db["counters"].update(counter, {"$set": {"daysSince": counter["daysSince"] + 1}})
        print("updated")
    return "done"

#Get Counters from Database
@app.route("/", methods=['GET'])
def getCounters():
    db = client["counterservice"]
    counters = []
    for counter in db["counters"].find({}, projection = {"_id" : False}):
        counters.append(counter)
    return jsonify(counters)

#Add Counters to Database
@app.route("/add", methods=['POST'])
def addCounter():
    db = client["counterservice"]
    newCounter = request.get_json()
    db["counters"].insert_one(newCounter)
    return "done"

#Reset Counters in Database
@app.route("/reset", methods=['POST'])
def reset():
    db = client["counterservice"]
    changed_counter = request.get_json()
    for counter in db["counters"].find({}, projection={"_id": False}):
        if counter["counterName"] == changed_counter["counterName"]:
            db["counters"].update(counter, {"$set": {"daysSince": 0}})
            break
    return "done"

#Delete Counters in Database
@app.route("/delete", methods=['POST'])
def delete():
    db = client["counterservice"]
    changed_counter = request.get_json()
    print(changed_counter)
    for counter in db["counters"].find({}, projection={"_id": False}):
        if counter["counterName"] == changed_counter['counterName']:
            db["counters"].delete_one(counter)
            break
    return "done"

if __name__ == "__main__":
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=updateCounters, trigger='cron', hour  =00, minute = 00)
    scheduler.start()
    app.run()

