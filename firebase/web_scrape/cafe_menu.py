from bs4 import BeautifulSoup
import requests

base_url = "https://oncampusdining.com/tabor/menus/"
# Web Scrape the source page from Tabor College cafe menu
result = requests.get(base_url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")

daysRef = doc.find(id="dayMenu")
links = daysRef.find_all("a")
days = []
for link in links:
    # Remove "./" from the query string by slicing
    query_string = link.get("href")[2:]
    day = {"name": link.text, "link": base_url + query_string}
    days.append(day)

days_data = []
for day in days:
    # Scrape the source page for each day from Sun-Sat
    dayResult = requests.get(day["link"], headers={"User-Agent": "Mozilla/5.0"})
    dayDoc = BeautifulSoup(dayResult.text, "html.parser")
    # Get all of the cafe menu categories
    menu_categories = dayDoc.find_all("div", class_="menuArea")
    # Initialize the data that will get stored in Firestore
    cafe_menu_data = {"sections": []}

    # Loop out the Menu Categories
    for menu_category in menu_categories:
        header = menu_category.h4.text
        # Get all of the menu items
        menu_items = menu_category.find_all("li")
        food_items = []
        # Loop out the menu items and store them in the data dictionary
        for menu_item in menu_items:
            food_items.append(menu_item.text)
        section = {}
        section["title"] = header
        section["data"] = food_items
        cafe_menu_data["sections"].append(section)
    days_data.append({"day_name": day["name"], "cafe_menu_data": cafe_menu_data})

# Initialize Firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("firebase_secret_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Save data to Firestore
def save(collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)


# Loop out the days that will get saved
for day_data in days_data:
    save(
        collection_id="cafe menu",
        document_id=day_data["day_name"],
        data=day_data["cafe_menu_data"],
    )
