import requests
from bs4 import BeautifulSoup

result = requests.get("https://quotes.toscrape.com")

html_content = result.text

soup = BeautifulSoup(html_content, "html.parser")

print(soup.find_all("div", {"class": "quote"}))
