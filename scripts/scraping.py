import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.tiwall.com/shirinhamze'
resp = requests.get(url)
soup = BeautifulSoup(resp.text, 'html.parser')

activities = []
for item in soup.select('.item_list .media-body h3 a'):
    activities.append({
        'title': item.get_text(strip=True),
        'url': 'https://www.tiwall.com' + item['href']
    })

with open('public/data/tiwall.json', 'w', encoding='utf-8') as f:
    json.dump(activities, f, ensure_ascii=False, indent=2)
