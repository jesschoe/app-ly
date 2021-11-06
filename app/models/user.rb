class User < ApplicationRecord
  has_many :jobs
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP,
                              message: 'please enter a valid email' }
  validates :password, length: { minimum: 6,
                                 too_short: 'password must be at least 6 characters long' }
end
