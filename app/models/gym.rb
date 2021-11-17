class Gym < ApplicationRecord
    has_many :members
    has_secure_password
    validates :username, presence: true, uniqueness: {case_sensitive: false}
end
