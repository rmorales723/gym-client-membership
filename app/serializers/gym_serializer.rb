class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :address, :email, :user_id, :password_digest
end
