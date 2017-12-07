# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  auth0_id   :string           not null
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :auth0_id, presence: true

  has_many :tasks,
           primary_key: :id,
           foreign_key: :owner_id,
           class_name: :Task
end
