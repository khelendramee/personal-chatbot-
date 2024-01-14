import json
from gensim.models import Word2Vec
from nltk.tokenize import word_tokenize

# Function to read text from a file
def read_text_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
        text = file.read()
    return text

# Specify the path to your book file
book_file_path = "main.txt"

# Read text from the book file
book_text = read_text_from_file(book_file_path)

# Tokenize the Book Text
tokens = word_tokenize(book_text.lower())  # You might need to install nltk: pip install nltk

# Word2Vec Model
model = Word2Vec([tokens], vector_size=100, window=5, min_count=1, workers=4)

# Word Embeddings
word_embeddings = model.wv

# Create a dictionary to store word vectors
word_vectors_dict = {}

# Get Word Vector for each word in the book text
for word in tokens:
    word_vector = word_embeddings[word].tolist()  # Convert float32 to regular Python float
    word_vectors_dict[word] = word_vector

# Write the dictionary to a JSON file
json_file_path = "index.json"
with open(json_file_path, 'w') as json_file:
    json.dump(word_vectors_dict, json_file)

print(f"Word vectors saved to {json_file_path}")
