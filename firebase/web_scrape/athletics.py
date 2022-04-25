from cgitb import text
from bs4 import BeautifulSoup
import requests
import re


url = "https://www.taborbluejays.com/"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")


game_day = doc.find_all("span", class_="inner")
for day in game_day:
    print(day.text)
    

game_locations = doc.find_all("div", class_="location")
for location in game_locations:
    print (location.text)

game_teams = doc.find_all("div", class_="col-xs-8")
for team in game_teams:
    print (team.text)

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


data = {}
for i, game_day in enumerate (game_day):
    data[f"day {i}"] = day.text

for i, game_locations in enumerate (game_locations):
        data[f"location {i}"] = location.text
    
for i, game_teams in enumerate (game_teams):
        data[f"team {i}"] = team.text


cred= credentials.Certificate(
    "senior-design-i-prototype-firebase-adminsdk-214zu-fddb94e504.json"
)


firebase_admin.initialize_app(cred)
db = firestore.client()

def save (collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)

    save(collection_id="day", data=data)
    save(collection_id="location", data=data)
    save(collection_id="team", data=data)

