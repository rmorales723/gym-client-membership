class RemoveUserIdFromGyms < ActiveRecord::Migration[6.1]
  def change
    remove_column :gyms, :user_id, :string
  end
end
