class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :activity
      t.text :description
      t.integer :duration

      t.timestamps
    end
  end
end
