class CreateBundleLinks < ActiveRecord::Migration
  def change
    create_table :bundle_links do |t|
      t.integer :bundle_id
      t.integer :link_id

      t.timestamps
    end
  end
end
