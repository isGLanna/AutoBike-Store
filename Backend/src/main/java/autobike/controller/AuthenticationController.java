package autobike.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import autobike.service.AuthenticationService;


@RestController
@CrossOrigin(origins = "*")
class AuthenticationController {

  @Autowired
  private AuthenticationService authentication;

  @PostMapping("/login")
  public String login(@RequestBody User user) {
    return authentication.generateToken(user.email, user.password);
  }

  public String register(@RequestBody User user) {
    return;
  }
}