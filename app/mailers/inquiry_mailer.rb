class InquiryMailer < ApplicationMailer
  def send_mail(inquiry)
    @inquiry = inquiry
    mail(
      from: 'utinoricardo@gmail.com',
      to:   'utinoricardo@gmail.com',
      subject: 'お問い合わせ通知'
    )
  end
end
