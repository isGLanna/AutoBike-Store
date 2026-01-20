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

  // Terminar esse endpoint
  @PostMapping("/validateToken")
  public boolean validateToken(@RequestBody Map<String, String> request) {
    String token = request.get("token");
    return userAuthentication.isTokenValid(token);
  }

  // Criar cadastro de usuário
  @PostMapping("/register")
  public String register(@RequestBody Map<String, String> user) {
    String name = user.get("name");
    String surname = user.get("surname");
    String email = user.get("email");
    String password = user.get("password");
    String experience = user.get("experience");
    String ciclysModality = user.get("ciclysModality");
    String motivation = user.get("motivation");
    String role = "USER";
    
  }
}