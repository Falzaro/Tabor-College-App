from bs4 import BeautifulSoup
import requests
import re


url = "https://tabor.edu/news/"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")

news_data = {"News": []}


article_summary = doc.find_all("div", class_="entry-summary")
for summary in article_summary:
    print(summary.text)
    
read_more = doc.find_all("a", class_="continue")
for location in read_more:
    print (location.text)


for link in doc.find_all('a', class_="continue"):
   print(link.get('href'))


images = doc.find_all('img', class_="col-sm-3")
for images in images:
    print ("Image: ", images.img["data-src"])




import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


data = {}
for i, article_summary in enumerate (article_summary):
    data[f"summary {i}"] = summary.text

for i, read_more in enumerate (read_more):
        data[f"location {i}"] = location.text
    

for i, link in enumerate (link):
        data[f"links {i}"] = link.get('href')
    


cred= credentials.Certificate(
    "senior-design-i-prototype-firebase-adminsdk-214zu-fddb94e504.json"
)


firebase_admin.initialize_app(cred)
db = firestore.client()

def save (collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)

    save(collection_id="summary", data=data)
    save(collection_id="location", data=data)
    save(collection_id="links", data=data)