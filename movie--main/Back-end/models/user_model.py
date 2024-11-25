from mongoengine import Document, StringField, BooleanField, EnumField
from datetime import datetime

class User(Document):
    private = BooleanField(default=False)
    fullname = StringField(required=True)
    username = StringField(required=True, unique=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    profile_picture = StringField(
        default="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
    )
    bio = StringField(default="")
    gender = EnumField(enum=['male', 'female', 'other'])
    phone = StringField(default="")
    # Phân quyền cho user
    role = StringField(default="user")
    meta = {
        'collection': 'users',
        'timestamps': True
    }

    def to_json(self):
        return {
            'id': str(self.id),
            'fullname': self.fullname,
            'username': self.username,
            'email': self.email,
            'profile_picture': self.profile_picture,
            'bio': self.bio,
            'gender': self.gender,
            'phone': self.phone,
            'private': self.private
        }