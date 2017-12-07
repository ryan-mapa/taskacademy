class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :auth0_id, null: false
      t.string :first_name
      t.string :last_name
      t.timestamps
    end

    add_index :users, :auth0_id
  end
end
