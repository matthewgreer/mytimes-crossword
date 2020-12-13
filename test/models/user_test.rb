# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string           not null
#  session_token       :string           not null
#  password_digest     :string           not null
#  leaderboard_alias   :string
#  leaderboard_url_key :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  timezone            :string
#  last_gold_star_date :datetime
#  streak              :integer          default(0)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
