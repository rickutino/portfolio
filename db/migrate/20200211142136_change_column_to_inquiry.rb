class ChangeColumnToInquiry < ActiveRecord::Migration[5.2]
  def up
    change_column :inquiries, :name, :string, null: false
    change_column :inquiries, :emails, :string, null: false
    change_column :inquiries, :title, :string, null: false
    change_column :inquiries, :message, :text, null: false
  end

  # 変更前の状態
  def down
    change_column :inquiries, :name, :string
    change_column :inquiries, :emails, :string
    change_column :inquiries, :title, :string
    change_column :inquiries, :message, :string
  end
end
