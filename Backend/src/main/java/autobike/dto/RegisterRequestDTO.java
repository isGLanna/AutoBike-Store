package autobike.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequestDTO {
  @NotBlank(message = "Name is required")
  @Size(max = 30, message = "Name must be at most 30 characters")
  public String name;

  @NotBlank(message = "Surname is required")
  @Size(max = 75, message = "Surname must be at most 75 characters")
  public String surname;

  @NotBlank(message = "Nickname is required")
  @Size(max = 30, message = "Nickname must be at most 30 characters")
  public String nickname;

  @Email(message = "Invalid email format")
  @NotBlank(message = "Email is required")
  @Size(max = 50, message = "Email must be at most 50 characters")
  public String email;

  @NotBlank(message = "Password is required")
  @Size(min = 6, max = 30, message = "Password must be at least 6 and most 30 characters")
  public String password;

  public String confirmPassword;

  public String experience;
  public String ciclysModality;
  public String motivation;
  
}