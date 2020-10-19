# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_19_204650) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "micros", force: :cascade do |t|
    t.datetime "date", null: false
    t.string "author", null: false
    t.string "solution", null: false, array: true
    t.string "clue_set", null: false, array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date"], name: "index_micros_on_date"
    t.index ["id"], name: "index_micros_on_id"
  end

  create_table "user_micros", force: :cascade do |t|
    t.string "solving_state", array: true
    t.integer "timer"
    t.boolean "solved"
    t.bigint "user_id"
    t.bigint "micros_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["micros_id"], name: "index_user_micros_on_micros_id"
    t.index ["user_id"], name: "index_user_micros_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "leaderboard_alias"
    t.string "leaderboard_url_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
