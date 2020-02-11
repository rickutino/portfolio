class InquiryMailer < ApplicationMailer
  def send_mail(inquiry)
    @inquiry = inquiry
    mail(
      from: 'avancerock@gmail.com',
      to:   'avancerock@gmail.com',
      subject: 'お問い合わせ通知'
    )
  end
end
