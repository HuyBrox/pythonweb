from flask import Blueprint
from controllers.movie_controller import (
    create_movie,
    get_all_movies,
    get_movie,
    update_movie,
    delete_movie
)

movie_bp = Blueprint('movie', __name__)

# Movie routes
movie_bp.route('/', methods=['POST'])(create_movie)
movie_bp.route('/', methods=['GET'])(get_all_movies)
movie_bp.route('/<movie_id>', methods=['GET'])(get_movie)
movie_bp.route('/<movie_id>', methods=['PUT'])(update_movie)
movie_bp.route('/<movie_id>', methods=['DELETE'])(delete_movie)

# Don't forget to register this blueprint in your index_route.py
# main_bp.register_blueprint(movie_bp, url_prefix='/movies')