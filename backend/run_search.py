from reverse_image_search import GoogleReverseImageSearch

# Example values
query = "golden retriever"
image_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJMsaA28A32PrOKnj_PqUF1PezvB1bAygtQ&s"

search = GoogleReverseImageSearch()
results = search.response(query=query, image_url=image_url, max_results=5)

print(results)
