
from bs4 import BeautifulSoup
import requests



# Import website information into code
url = "https://tabor.edu/shop/"
result = requests.get(url, headers = {"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.content, "html.parser")
# print(doc)


# Scraping product name in Firestore
products = doc.find_all("li", class_ = "sale")
product_data = {"sections": []}

for product in products: 
    header = product.img["data-src"]
    item = product.h2.text
    price = product.ins.text
    product_item = product.find_all("li")
      
    section = {}
    section["image"] = header
    section["text"] = item
    section["price"] = price
    product_data["sections"].append(section)

# Import all relevant libraries for Firestore
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
cred = credentials.Certificate("senior-design-i-prototype-firebase-adminsdk-214zu-f47465ca8b.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
# print(db)

# Create a function to store the data in firebase
def save(collection_id, document_id, data):
    db.collection(collection_id).document(document_id).set(data)

save(collection_id="products", document_id="testing data2", data=product_data)