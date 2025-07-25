from flask import Flask, request, jsonify
from search_engine import text_image_search, reverse_image_search
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/api/search", methods=["GET"])
def search_images():
    query = request.args.get("query", "")
    if not query:
        return jsonify({"error": "No query provided"}), 400
    results = text_image_search(query)
    return jsonify(results)

@app.route("/api/reverse", methods=["GET"])
def reverse_search():
    image_url = request.args.get("url", "")
    if not image_url:
        return jsonify({"error": "No image URL provided"}), 400
    reverse_link = reverse_image_search(image_url)
    return jsonify({"reverse_url": reverse_link})

if __name__ == "__main__":
    app.run(debug=True)
