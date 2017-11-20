class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.date :due_date
      t.integer :parent_id
      t.boolean :completed, default: false

      t.timestamps
    end

    add_index :tasks, :owner_id
    add_index :tasks, :parent_id
  end
end
