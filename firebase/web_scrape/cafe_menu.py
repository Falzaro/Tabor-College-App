from bs4 import BeautifulSoup
import requests

# Web scrape Cafe Menu web page from tabor college website
url = "https://oncampusdining.com/tabor/menus/?d=2022-03-09"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
# Scrape the source page
doc = BeautifulSoup(result.text, "html.parser")
# Get all of the cafe menu categories
menu_categories = doc.find_all("div", class_="menuArea")
print(menu_categories)

# # Initialize the data that will get stored in Firestore
# cafe_menu_data = {
#     "Breakfast": [],
#     "Lunch": [],
#     "Lunch Rotisserie": [],
#     "Dinner": [],
#     "Dinner Rotisserie": [],
# }

# # Loop out the Menu Categories
# for menu_category in menu_categories:
#     header = menu_category.h4.text
#     # Get all of the menu items
#     menu_items = menu_category.find_all("li")
#     # Loop out the menu items and store them in the data dictionary
#     for item in menu_items:
#         cafe_menu_data[header].append(item.text)

# # Initialize Firebase
# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore

# cred = credentials.Certificate("firebase_secret_key.json")
# firebase_admin.initialize_app(cred)
# db = firestore.client()

# # Save data to Firestore
# def save(collection_id, document_id, data):
#     db.collection(collection_id).document(document_id).set(data)


# save(collection_id="cafe menu", document_id="monday", data=cafe_menu_data)
