require 'test_helper'

class RootControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_controller_index_url
    assert_response :success
  end

end
