from search_engine import text_image_search, reverse_image_search

query = "sunset beach"
results = text_image_search(query)

print(f"🔍 Image results for '{query}':\n")
for res in results:
    print(f"- {res['title']}")
    print(f"  Image URL: {res['url']}")
    print(f"  Source: {res['source']}\n")

image_url = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
print("🔁 Reverse image search link:")
print(reverse_image_search(image_url))
