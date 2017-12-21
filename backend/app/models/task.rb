# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  due_date   :date
#  parent_id  :integer
#  completed  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :owner_id, :title, presence: true

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  belongs_to :parent_task,
             primary_key: :id,
             foreign_key: :parent_id,
             class_name: :Task

  has_many :subtasks,
           primary_key: :id,
           foreign_key: :parent_id,
           class_name: :Task
end
