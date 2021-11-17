class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :address, :members
end
