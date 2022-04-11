from bs4 import BeautifulSoup
import requests

# Web scrape Cafe Menu web page from tabor college website
url = "https://oncampusdining.com/tabor/menus/?d=2022-03-09"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
# Scrape the source page
doc = BeautifulSoup(result.text, "html.parser")
# Get all of the cafe menu categories
menu_categories = doc.find_all("div", class_="menuArea")

# Initialize the data that will get stored in Firestore
# list of section and items
cafe_menu_data = {"sections": []}

# Loop out the Menu Categories
for menu_category in menu_categories:
    header = menu_category.h4.text
    # Get all of the menu items
    menu_items = menu_category.find_all("li")
    items = []
    # Loop out the menu items and store the text in the items list
    for menu_item in menu_items:
        items.append(menu_item.text)

    section = {}
    section["title"] = header
    section["data"] = items
    cafe_menu_data["sections"].append(section)


# Initialize Firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("firebase_secret_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# # # Save data to Firestore
def save(collection_id, document_id, data):
    # db.collection(collection_id).document(document_id).set(data)
    print(collection_id, document_id, data)


save(collection_id="cafe menu", document_id="tuesday", data=cafe_menu_data)
