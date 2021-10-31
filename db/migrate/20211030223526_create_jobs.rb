class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :location
      t.string :position
      t.string :salary
      t.text :description
      t.text :url
      t.date :applied
      t.date :interview
      t.date :offer
      t.string :offer_salary
      t.string :priority
      t.string :column
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
