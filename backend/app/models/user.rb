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

  after_initialize :ensure_session_token

  has_many :tasks,
           primary_key: :id,
           foreign_key: :owner_id,
           class_name: :Task

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
