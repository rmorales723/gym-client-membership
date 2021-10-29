class Gym < ApplicationRecord
    has_many :members
    #validates :email, :user_id, :password_digest
    #validates :name presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 5}
end
