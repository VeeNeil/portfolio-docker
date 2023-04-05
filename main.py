from flask import *
from flask_pymongo import PyMongo
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
@app.route('/')
def home():
    return ({"result":"hello world"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug = True)