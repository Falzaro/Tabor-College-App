

from bs4 import BeautifulSoup
import requests
import re

# Scraping general library info in Firestore
url = "https://taborcollege.libguides.com/c.php?g=1091216&p=7958360"
result = requests.get(url, headers = {"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.content, "html.parser")


libraryHours = doc.find_all("table", class_ = "table table-bordered")
libraryTitle = doc.find_all("div", id="s-lg-box-27768685")
libraryContact = doc.find_all("div", id= "s-lg-box-25233302-container")

libraryHoursData = {"sections": []}

# getting Time dan Days
for hours in libraryHours:
    for title in libraryTitle:
        header = title.h2.text
        
    
    all_items = hours.find_all("span")
    items = []
    
    for all_of_items in all_items:
        items.append(all_of_items.text)
        
    section = {}
    section ["data"] = items
    section["title"] = header
    libraryHoursData["sections"].append(section)
    
# this portion creates another map of data 
# getting contact information
for contact in libraryContact:
    for information in libraryContact:
        contactTitle = information.h2.text
    
    retrieve_items = contact.find_all("span")
    items = []
    
    
    for contactInfo in retrieve_items:
        items.append(contactInfo.br.previous_sibling)
        items.append(contactInfo.br.next_sibling)
        
        
        
        
    
    section = {}
    section ["data"] = items
    section["title"] = contactTitle
    libraryHoursData["sections"].append(section)
   


# Import all relevant libraries for Firestore
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Please replace the credentials number
cred = credentials.Certificate("senior-design-i-prototype-firebase-adminsdk-214zu-f47465ca8b.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
# print(db)

# Create a function to store the data in firebase
def save(collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)

save(collection_id="library hours", document_id="test data", data=libraryHoursData)
# save(collection_id="library contact information", document_id="lib contact info", data=contactInfo)