class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :position
      t.string :email
      t.string :phone
      t.references :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
