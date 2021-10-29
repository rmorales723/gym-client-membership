class Gym < ApplicationRecord
    has_many :members
    has_secure_password
    #validates :email, :user_id, :password_digest
    #validates :name presence: true, uniqueness: {case_sensitive: false}, length: {minimum: 5}
end
