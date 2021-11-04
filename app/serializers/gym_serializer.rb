class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :address, :email, :members, :username
end
