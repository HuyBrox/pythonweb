from mongoengine import Document, StringField, IntField

class Movie(Document):
    title = StringField(required=True)
    description = StringField(required=True)
    genre = StringField(required=True)
    time = StringField(required=True)  # Keep as StringField to maintain format like "165 phút"
    year = IntField(required=True)
    linkYoutube = StringField(required=True)

    meta = {
        'collection': 'movies',
        'timestamps': True  # Adds createdAt and updatedAt fields automatically
    }

    def to_json(self):
        return {
            'id': str(self.id),
            'title': self.title,
            'description': self.description,
            'genre': self.genre,
            'time': self.time,
            'year': self.year,
            'linkYoutube': self.linkYoutube,
            'createdAt': self.created_at.isoformat() if hasattr(self, 'created_at') else None,
            'updatedAt': self.updated_at.isoformat() if hasattr(self, 'updated_at') else None
        }