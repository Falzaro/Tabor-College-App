
from bs4 import BeautifulSoup
import requests

url = "https://tabor.edu/shop/"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")


# etracting first page  looking for all item that is on "sale"
grabSaleItems = doc.find_all("li", class_="sale")
getSaleItems = {"sections": []}

for product in grabSaleItems:
    # extracting the image
    imageLink = product.img["data-src"]

    # Extract data from the page and store it
    item = product.h2.text
    price = product.span.text
    sale = product.ins.text
    product_item = product.find_all("li")
        
   
    section = {}
    section ["image"] = imageLink
    section["name"] = item
    section["price"] = price
    section["sale"] = sale
    getSaleItems["sections"].append(section)
    
  

# grabbing links and extracting the Next Page
nextRef = doc.find( class_="woocommerce-pagination")
links = nextRef.find_all("a")
nextPage = []

# extract the links
for link in links[1:]:
    query_string = link.get("href")
    linkText = {"name": link.text, "link": "https://tabor.edu/" + query_string}
    nextPage.append(linkText)
   

# loop 
for nextLink in nextPage: 
    nextPageResult = requests.get(nextLink["link"], headers={"User-Agent": "Mozilla/5.0"} )
    nextDoc = BeautifulSoup(nextPageResult.text, "html.parser")
    
    # looking for all item that is on "sale"
    grabSaleItems = nextDoc.find_all("li", class_ = "sale")
 
    # Extract data from the page and store it
    for product in grabSaleItems: 
        # extract image
        imageLink = product.img["data-src"]
        # name of each items
        item = product.h2.text
        price = product.span.text
        sale = product.ins.text
        product_item = product.find_all("li")
        
        section = {}
        section["image"] = imageLink
        section["name"] = item
        section["price"] = price
        section["sale"] = sale
        getSaleItems["sections"].append(section)

    

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

save(collection_id="products", document_id="Sales Item", data=getSaleItems)