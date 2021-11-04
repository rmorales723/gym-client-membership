class AddImgUrlToMembers < ActiveRecord::Migration[6.1]
  def change
    add_column :members, :img_url, :string
  end
end
