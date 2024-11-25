from flask import Blueprint
from controllers.user_controller import register, get_profile, update_profile

user_bp = Blueprint('user', __name__)

user_bp.route('/register', methods=['POST'])(register)
user_bp.route('/profile/<user_id>', methods=['GET'])(get_profile)
user_bp.route('/profile/<user_id>', methods=['PUT'])(update_profile)