from flask import Flask, jsonify
from dotenv import load_dotenv
from routes.index_route import main_bp  # Đảm bảo rằng bạn đã có main_bp đúng
from utils.db import connect_db
import os

# Nạp các biến môi trường từ file .env
load_dotenv()

app = Flask(__name__)

# Kết nối với database
db = connect_db()

# Kiểm tra kết nối database
if db is None:
    raise Exception("Failed to connect to database")

# Đăng ký blueprint với Flask
app.register_blueprint(main_bp, url_prefix='/api')

# Route chính
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': 'Server is running',
        'success': True
    }), 200

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
