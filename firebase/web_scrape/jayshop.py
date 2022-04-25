
from bs4 import BeautifulSoup
import requests

url = "https://tabor.edu/shop/"

result = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
doc = BeautifulSoup(result.text, "html.parser")


prices = doc.find_all("span", class_ = "woocommerce-Price-amount") 

for price in prices:
    print(price.text)