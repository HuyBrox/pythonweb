from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def connect_db():
    try:
        mongo_uri = os.getenv("MONGO_URI")
        print(f"MONGO_URI: {mongo_uri}")  # Kiểm tra giá trị của MONGO_URI
        if mongo_uri is None:
            raise ValueError("MONGO_URI not found in environment variables.")

        client = MongoClient(mongo_uri)
        db = client.get_database("your_database_name")  # Thêm tên database của bạn vào đây

        if db is None:  # Sửa lỗi ở đây
            raise Exception("Failed to connect to database")

        print("Connected to MongoDB successfully")
        return db
    except Exception as e:
        print(f"Error connecting to MongoDB: {str(e)}")
        return None

# Gọi kết nối và kiểm tra
db = connect_db()
