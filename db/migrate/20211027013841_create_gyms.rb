class CreateGyms < ActiveRecord::Migration[6.1]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :number
      t.string :address
      t.string :email
      t.string :user_id
      t.string :password_digest

      t.timestamps
    end
  end
end
