class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :address, :gym_id
end
