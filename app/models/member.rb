class Member < ApplicationRecord
    belongs_to :gym
    #validates :name, :number, :address, presence: true
end
