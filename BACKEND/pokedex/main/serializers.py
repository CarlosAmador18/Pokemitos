from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords must match")
        return data