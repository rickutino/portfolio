class HomeController < ApplicationController
  def index
    @inquiry = Inquiry.new
  end
  
  def new
    @inquiry = Inquiry.new
  end
  
  def create
    @inquiry = Inquiry.new(mailer_parameter)
    # binding.pry
    InquiryMailer.send_mail(@inquiry).deliver_now
  end
  def mailer_parameter
    params.require(:inquiry).permit(:name, :emails, :title, :message) 
  end

end
