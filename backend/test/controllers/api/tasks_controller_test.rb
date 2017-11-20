require 'test_helper'

class Api::TasksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_tasks_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_tasks_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_tasks_index_url
    assert_response :success
  end

  test "should get edit" do
    get api_tasks_edit_url
    assert_response :success
  end

  test "should get show" do
    get api_tasks_show_url
    assert_response :success
  end

end
