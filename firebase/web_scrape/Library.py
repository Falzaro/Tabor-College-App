# Sriram Srinivasan

from bs4 import BeautifulSoup
import requests
import re

# Scraping general library info in Firestore
url = "https://taborcollege.libguides.com/c.php?g=1091216&p=7958360"
result = requests.get(url, headers = {"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.content, "html.parser")


libHours = doc.find_all("table", class_ = "table table-bordered")
libTitle = doc.find_all("div", id="s-lg-box-27768685")
libContact = doc.find_all("div", id= "s-lg-box-25233302-container")

libHoursData = {"sections": []}


# Finding the library hours
for hours in libHours:
    for title in libTitle:
        header = title.h2.text
        
    
    all_items = hours.find_all("td")
    items = []
    
    # Saving it to items array
    for all_of_items in all_items:
        items.append(all_of_items.text)
        
    section = {}
    section ["data"] = items
    section["title"] = header
    libHoursData["sections"].append(section)
    
# This portion creates another map of data 
# for getting contact information
for contact in libContact:
    for information in libContact:
        contactTitle = information.h2.text
    
    retrieve_items = contact.find_all("span")
    items = []
    
    
    for contactInfo in retrieve_items:
        items.append(contactInfo.br.previous_sibling)
        items.append(contactInfo.br.next_sibling)
        
        
        
        
    section = {}
    section ["data"] = items
    section["title"] = contactTitle
    libHoursData["sections"].append(section)
   


# Import all relevant libraries for Firestore
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Please replace the credentials number
# cred = credentials.Certificate("senior-design-i-prototype-firebase-adminsdk-214zu-f47465ca8b.json")
cred = credentials.Certificate("firebase_secret_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
# print(db)

# Create a function to store the data in firebase
def save(collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)

# Please change collection_id and document_id
# save(collection_id="library hours", document_id="tan test data", data=libHoursData)
save(collection_id="library hours", document_id="sriram test data", data=libHoursData)