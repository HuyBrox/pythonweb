from flask import Blueprint
from routes.user_route import user_bp
from routes.movie_route import movie_bp

main_bp = Blueprint('main', __name__)
main_bp.register_blueprint(user_bp, url_prefix='/user')
main_bp.register_blueprint(movie_bp, url_prefix='/movie')

