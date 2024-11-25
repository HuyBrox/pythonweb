from flask import request, jsonify
from werkzeug.security import generate_password_hash
from models.user_model import User

def register():
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['username', 'email', 'password', 'fullname']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Check if username or email already exists
        if User.objects(username=data['username']).first():
            return jsonify({'error': 'Username already exists'}), 400

        if User.objects(email=data['email']).first():
            return jsonify({'error': 'Email already exists'}), 400

        # Hash password
        data['password'] = generate_password_hash(data['password'])

        # Create new user
        new_user = User(**data).save()

        return jsonify({
            'message': 'User registered successfully',
            'user': new_user.to_json()
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def get_profile(user_id):
    try:
        user = User.objects(id=user_id).first()
        if not user:
            return jsonify({'error': 'User not found'}), 404
        return jsonify(user.to_json()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def update_profile(user_id):
    try:
        user = User.objects(id=user_id).first()
        if not user:
            return jsonify({'error': 'User not found'}), 404

        data = request.get_json()
        allowed_fields = ['fullname', 'bio', 'profile_picture', 'gender', 'phone', 'private']

        for field in data:
            if field in allowed_fields:
                setattr(user, field, data[field])

        user.save()
        return jsonify({
            'message': 'Profile updated successfully',
            'user': user.to_json()
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500