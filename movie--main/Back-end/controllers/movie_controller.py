from flask import request, jsonify
from models.movie_model import Movie

def create_movie():
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['title', 'description', 'genre', 'time', 'year', 'linkYoutube']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Create new movie
        new_movie = Movie(**data).save()

        return jsonify({
            'message': 'Movie created successfully',
            'movie': new_movie.to_json()
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def get_all_movies():
    try:
        movies = Movie.objects().all()
        return jsonify([movie.to_json() for movie in movies]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def get_movie(movie_id):
    try:
        movie = Movie.objects(id=movie_id).first()
        if not movie:
            return jsonify({'error': 'Movie not found'}), 404
        return jsonify(movie.to_json()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def update_movie(movie_id):
    try:
        movie = Movie.objects(id=movie_id).first()
        if not movie:
            return jsonify({'error': 'Movie not found'}), 404

        data = request.get_json()
        allowed_fields = ['title', 'description', 'genre', 'time', 'year', 'linkYoutube']

        for field in data:
            if field in allowed_fields:
                setattr(movie, field, data[field])

        movie.save()
        return jsonify({
            'message': 'Movie updated successfully',
            'movie': movie.to_json()
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def delete_movie(movie_id):
    try:
        movie = Movie.objects(id=movie_id).first()
        if not movie:
            return jsonify({'error': 'Movie not found'}), 404

        movie.delete()
        return jsonify({
            'message': 'Movie deleted successfully'
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500