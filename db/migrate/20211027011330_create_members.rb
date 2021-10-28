class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :number
      t.string :address
      t.integer :gym_id

      t.timestamps
    end
  end
end