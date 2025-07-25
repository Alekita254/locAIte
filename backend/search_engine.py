import os
import requests
from dotenv import load_dotenv

load_dotenv()
PEXELS_API_KEY = os.getenv("PEXELS_API_KEY")

def text_image_search(query, max_results=6):
    headers = {"Authorization": PEXELS_API_KEY}
    url = f"https://api.pexels.com/v1/search?query={query}&per_page={max_results}"

    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return []

    data = response.json()
    results = []
    for photo in data.get("photos", []):
        results.append({
            "title": photo.get("alt", "No Title"),
            "url": photo["src"]["large"],
            "source": photo["photographer_url"]
        })
    return results

def reverse_image_search(image_url):
    return f"https://tineye.com/search?url={image_url}"