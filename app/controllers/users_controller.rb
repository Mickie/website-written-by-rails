class UsersController < ApplicationController
  def new
    flash.notice = "Your account has been successfully created"


  end
  def show
    @current_user="true"
  end


end
