package csd.week5.automateEmail;

import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegisterEmail(String email, String username) {
        SimpleMailMessage message = new SimpleMailMessage();

        String subject = "Thank You for registration, ${username}!";
        String template = "Dear ${username},\n\n" +
                          "Thank you for registering with our service. We are excited to have you on board.\n\n" +
                          "Should you need any assistance, feel free to contact our support team.\n\n" +
                          "Warm regards,\n" +
                          "The Team";
        message.setTo(email);
        message.setSubject(replaceTemplateVariables(subject, username));
        message.setText(replaceTemplateVariables(template, username));

        mailSender.send(message);
    }


    private String replaceTemplateVariables(String template, String username) {
        return template.replace("${username}", username);
    }

    public void sendPurchaseConfirmationEmail(String email, Long orderNumber, String username, StringBuilder body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Recepit no: " + Long.toString(orderNumber) + "ticket purchase");
        message.setText(body.toString());
        mailSender.send(message);
    }
}
