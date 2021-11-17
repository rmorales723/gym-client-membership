class Member < ApplicationRecord
    belongs_to :gym
     validates_presence_of :name, :number, :address, :img_url
end
