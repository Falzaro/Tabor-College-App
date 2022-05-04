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
libraryImage = doc.find_all("div", id="s-lg-content-64408992")

# save data
libraryHoursData = {"open hours": [],
    "Contact information": []}

# search for "Don't Forget Image" and the memo
for image in libraryImage:
    imageLink = image.img["src"]
    memo = image.span.text
    
    libraryHoursData["memo"] = memo
    libraryHoursData["image"] = imageLink
    

# getting Time and Days
for hours in libraryHours:
    for title in libraryTitle:
        header = title.h2.text
        
    
    all_items = hours.find_all("tr")
    # extract the days
    for all_of_items in all_items:
        hoursRow = {
            "days": "",
            "hours": []
        }
       
        days = all_of_items.span.text
        
        tds = all_of_items.find_all("td")
        days = tds[0].span.text
        hoursRow["days"] = days
        for td in tds[1:]:
            hours = td.text
            hoursRow["hours"].append(hours)
        
    
        libraryHoursData["open hours"].append(hoursRow)
      

    section = {}
    #section ["hoursRows"] = hoursRows
    libraryHoursData["title"] = header
    libraryHoursData["open hours"].append(section)
    

# Getting contact information
for contact in libraryContact:
    for information in libraryContact:
        contactTitle = information.h2.text
    
    retrieve_items = contact.find("span")
    
    info = {
        "name": "",
        "reference": "",
        "email1": "",
        "phone": "",
        "ext" : ""
    }
    

    name, reference, email1, phone = retrieve_items.text.splitlines()
    email1 = email1.split()[1]
    phone, ext = phone.split()[1:]
    
    info["name"] = name
    info["reference"] = reference
    info["email1"] = email1
    info["phone"] = phone[:-1]
    info["ext"] = ext
    
    libraryHoursData["Contact information"] = info



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

save(collection_id="library hours", document_id="tan test data", data=libraryHoursData)
# save(collection_id="library contact information", document_id="lib contact info", data=contactInfo)