package autobike.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import autobike.security.UserAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
class UserAuthenticationController {

  @Autowired
  private UserAuthentication userAuthentication;

  @PostMapping("/login")
  public String login(@RequestBody Map<String, String> user) {
    String email = user.get("email");
    String password = user.get("password");

    String token = userAuthentication.generateToken(email);
    return token;
  }
}