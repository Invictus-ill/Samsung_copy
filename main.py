"""

USING THIS FILE ALONG WITH THE MAIN.PY BESIDE THE ATIS NOTEBOOK, WE PUSHED EVERYTHING ONTO MONGODO

"""
import pymongo

# 8JDTxxRrnTNfg1R6

connection_url = 'mongodb+srv://dbuser:8JDTxxRrnTNfg1R6@cluster0.je4i6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

client = pymongo.MongoClient(connection_url)

# Database
Database = client.get_database('myFirstDatabase')
# Table
SampleTable = Database.datas

queryObject = {
	"sentence" : "the plane leaves boston",
	"intents": ["flights"],
	"slots" : "o,o,o,b_fromcity"
}

SampleTable.insert_one(queryObject)

print("Done")
# To insert a single document into the database,
# insert_one() function is used
