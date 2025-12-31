package autobike.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PingController {

  @GetMapping("/ping")
  public String responder() {
    return "pong";
  }
}
