class Job < ApplicationRecord
  belongs_to :user
  has_many :contacts, dependent: :destroy
  has_many :notes, dependent: :destroy
end
