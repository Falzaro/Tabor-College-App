
from bs4 import BeautifulSoup
import requests

url = "https://tabor.edu/shop/"
result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")


# etracting first page // only
# targeting "products"
grabProducts = doc.find_all("li", class_="product")
# data are saved here and stored into firestore
grabProduct_data = {"sections": []}

for theProduct in grabProducts:
    # extracting the image
    imageLink = theProduct.img["data-src"]
    # extract each specific section
    item = theProduct.h2.text
    price = theProduct.span.text
    sale = theProduct.span.text
    product_item = theProduct.find_all("li")
        
    section = {}
    section ["image"] = imageLink
    section["name"] = item
    section["price"] = price
    grabProduct_data["sections"].append(section)
    
  

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
    

    products = nextDoc.find_all("li", class_ = "product")
 
    # Extract data from the page and store it
    for product in products: 
        # extract image
        imageLink = product.img["data-src"]
        # name of each items
        item = product.h2.text
        price = product.span.text
        sale = product.span.text
        product_item = product.find_all("li")
        
        section = {}
        section["image"] = imageLink
        section["name"] = item
        section["price"] = price
        grabProduct_data["sections"].append(section)

    

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

# store data
save(collection_id="products", document_id="CollectAllDataFromJayShop", data=grabProduct_data)